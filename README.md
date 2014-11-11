Utility to read and process .csv files from Elster Metering Systems

INSTALL
=====

Put powerbot.js and your csv file in the same folder.

Open your terminal and get to this folder.

`npm install buffered-reader`

This will only need to be once, it will download the needed libraries.

USAGE
=====

`node powerbot.js test1.csv`

SAMPLE OUTPUT
=============

```
Meter ID:98153169 Time: 11/3/2014 1:17:59 PM
============================================

Cumulative totals
- - - - - - - - - - - -
Import Wh : 29071.024 kWh

Rates
- - - - - - - - - - - -
Peak    (rate1): 6962.53288 kWh
Normal  (rate2): 10493.44656 kWh
Offpeak (rate3): 9059.84132 kWh
Cumulative rate: 26515.82076
Booked rate    : 2555.203 kWh

Maximum Demands (kVa)
- - - - - - - - - - - -
MD1a: 91.65952 kVa
MD1b: 91.3908 kVa
MD2c: 89.88024 kVa

Max : 91.65952 kVa @ R119.5/kVa

R 10953.31
```

LICENCE
=======

The MIT License (MIT)

Copyright (c) 2014 Rouan van der Ende

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
