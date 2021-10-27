import * as fs from 'fs';
import axios from 'axios';

axios.get("https://query1.finance.yahoo.com/v7/finance/download/BTC-USD?period1=1603789533&period2=1635321933&interval=1d&events=history&includeAdjustedClose=true")
.then(response=>{
    fs.writeFileSync('./dades/btc.csv',response.data.toString());
    const array:string[] = response.data.toString().split('\n');
    const arrayRow:string[] = array[array.length-1].split(',');
    console.log(`Preu tencament BTC dia: ${arrayRow[0]} es ${arrayRow[4]}`);
});

axios.get("https://query1.finance.yahoo.com/v7/finance/download/ETH-USD?period1=1603790936&period2=1635323336&interval=1d&events=history&includeAdjustedClose=true")
.then(response=>{
    fs.writeFileSync('./dades/eth.csv',response.data.toString());
    const array:string[] = response.data.toString().split('\n');
    const arrayRow:string[] = array[array.length-1].split(',');
    console.log(`Preu tencament ETH dia: ${arrayRow[0]} es ${arrayRow[4]}`);
});

axios.get("https://query1.finance.yahoo.com/v7/finance/download/ADA-USD?period1=1603790982&period2=1635323382&interval=1d&events=history&includeAdjustedClose=true")
.then(response=>{
    fs.writeFileSync('./dades/ada.csv',response.data.toString());
    const array:string[] = response.data.toString().split('\n');
    const arrayRow:string[] = array[array.length-1].split(',');
    console.log(`Preu tencament ADA dia: ${arrayRow[0]} es ${arrayRow[4]}`);
});

axios.get("https://query1.finance.yahoo.com/v7/finance/download/SOL1-USD?period1=1603791019&period2=1635323419&interval=1d&events=history&includeAdjustedClose=true")
.then(response=>{
    fs.writeFileSync('./dades/sol1.csv',response.data.toString());
    const array:string[] = response.data.toString().split('\n');
    const arrayRow:string[] = array[array.length-1].split(',');
    console.log(`Preu tencament SOL dia: ${arrayRow[0]} es ${arrayRow[4]}`);
});