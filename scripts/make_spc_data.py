"""Export the s059 I-MR series from the SECOM project for the site's background chart.

Reads the cleaned CSVs from ~/Dev/secom-spc (Step 2 output) and writes
src/data/spc_s059.json. Limits use the same Phase I I-MR formulas as
notebooks/02_clean_spc.ipynb, from training runs only.
Run: ~/Dev/venvs/secom/bin/python -I scripts/make_spc_data.py
"""
import json
from pathlib import Path

import numpy as np
import pandas as pd

SECOM = Path.home() / "Dev" / "secom-spc" / "data" / "processed"
OUT = Path(__file__).resolve().parent.parent / "src" / "data" / "spc_s059.json"
SENSOR = "s059"

train = pd.read_csv(SECOM / "clean_train.csv", usecols=[SENSOR, "fail"])
test = pd.read_csv(SECOM / "clean_test.csv", usecols=[SENSOR, "fail"])

x_train = train[SENSOR].to_numpy(dtype=float)
mr_bar = np.abs(np.diff(x_train)).mean()
sigma = mr_bar / 1.128          # d2 for n = 2
center = x_train.mean()

x_all = np.concatenate([x_train, test[SENSOR].to_numpy(dtype=float)])
fail_all = np.concatenate([train["fail"].to_numpy(), test["fail"].to_numpy()])
assert not np.isnan(x_all).any(), "cleaned data should have no gaps"

data = {
    "sensor": SENSOR,
    "n_train": int(len(x_train)),
    "x": [round(float(v), 2) for v in x_all],
    "fail_idx": [int(i) for i in np.flatnonzero(fail_all == 1)],
    "center": round(float(center), 3),
    "ucl": round(float(center + 3 * sigma), 3),
    "lcl": round(float(center - 3 * sigma), 3),
    "mr_ucl": round(float(3.267 * mr_bar), 3),
}
OUT.write_text(json.dumps(data))
print(f"{len(x_all)} runs ({data['n_train']} train), {len(data['fail_idx'])} fails")
print(f"CL {data['center']}, UCL {data['ucl']}, LCL {data['lcl']}, MR UCL {data['mr_ucl']}")
print(f"wrote {OUT} ({OUT.stat().st_size / 1024:.0f} KB)")
