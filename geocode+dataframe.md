

```python
import pandas as pd
import csv
import numpy as np
```


```python
geocodes = "../Project2/usgeocodes.csv"
```


```python
geocodes_pd = pd.read_csv(geocodes, low_memory=False)
geocodes_pd.head()
```




<div>
<style>
    .dataframe thead tr:only-child th {
        text-align: right;
    }

    .dataframe thead th {
        text-align: left;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>city</th>
      <th>city_ascii</th>
      <th>state_id</th>
      <th>state_name</th>
      <th>county_fips</th>
      <th>county_name</th>
      <th>lat</th>
      <th>lng</th>
      <th>population</th>
      <th>population_proper</th>
      <th>density</th>
      <th>source</th>
      <th>incorporated</th>
      <th>timezone</th>
      <th>zips</th>
      <th>id</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Prairie Ridge</td>
      <td>Prairie Ridge</td>
      <td>WA</td>
      <td>Washington</td>
      <td>53053</td>
      <td>Pierce</td>
      <td>47.1443</td>
      <td>-122.1408</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>1349.8</td>
      <td>polygon</td>
      <td>False</td>
      <td>America/Los_Angeles</td>
      <td>98360 98391</td>
      <td>1840037882</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Edison</td>
      <td>Edison</td>
      <td>WA</td>
      <td>Washington</td>
      <td>53057</td>
      <td>Skagit</td>
      <td>48.5602</td>
      <td>-122.4311</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>127.4</td>
      <td>polygon</td>
      <td>False</td>
      <td>America/Los_Angeles</td>
      <td>98232</td>
      <td>1840017314</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Packwood</td>
      <td>Packwood</td>
      <td>WA</td>
      <td>Washington</td>
      <td>53041</td>
      <td>Lewis</td>
      <td>46.6085</td>
      <td>-121.6702</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>213.9</td>
      <td>polygon</td>
      <td>False</td>
      <td>America/Los_Angeles</td>
      <td>98361</td>
      <td>1840025265</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Wautauga Beach</td>
      <td>Wautauga Beach</td>
      <td>WA</td>
      <td>Washington</td>
      <td>53035</td>
      <td>Kitsap</td>
      <td>47.5862</td>
      <td>-122.5482</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>261.7</td>
      <td>point</td>
      <td>False</td>
      <td>America/Los_Angeles</td>
      <td>98366</td>
      <td>1840037725</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Harper</td>
      <td>Harper</td>
      <td>WA</td>
      <td>Washington</td>
      <td>53035</td>
      <td>Kitsap</td>
      <td>47.5207</td>
      <td>-122.5196</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>342.1</td>
      <td>point</td>
      <td>False</td>
      <td>America/Los_Angeles</td>
      <td>98366</td>
      <td>1840037659</td>
    </tr>
  </tbody>
</table>
</div>


