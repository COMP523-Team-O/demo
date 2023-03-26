import subprocess
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# TODO: Need to update
# Currently using subprocess to gain the printed output from redditapi.py to get the JSON info
output = subprocess.check_output(["python", "redditapi.py"])
data = json.loads(output)
print(data)

app = FastAPI()

# Use cors to allow requests from different domains
origins = ["http://localhost", "http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get('/api/data')
async def get_data():
    return data