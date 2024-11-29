# medical_hallucination.github.io

When data is added, run the following to generate tab (section) titles for the web application: 
```bash 
node generateCaseSections.js
``` 

**Note**: In preparation for future scaling up purposes, this branch adds the feature of automatically generating the tabs for each case based on the *.txt* files in the *content* folder.

**Testing branch locally**:
``` bash 
python3 -m http.server
``` 