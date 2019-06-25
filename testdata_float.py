#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Created on Fri Nov  9 14:54:49 2018

@author: taniguchiryo
目的：Iotコマンド開発テスト用データ作成
指定されたレコード数、特徴量数のデータを標準出力する。
shellでの動作
python testdata_float.py レコード数　特徴量数
と入力
欠損値、エラー値（NaN）も指定したい。。
"""
import sys
import os
import pathlib
import argparse

# #set path
# path_root= pathlib.Path(__file__).resolve().parents[2]

# class testdata():
#     def __init__(self,record,values):
record = int(sys.argv[1])  #レコード数指定
values = int(sys.argv[2])   #特徴量数指定
values = values  + 1


import random
    # def float(self):
        #Header list
name = ["v0"] + ["v" + str(num) for num in range(1,values)]
##Header 出力
for i in range(0,len(name)-1):
    print(name[i], end=",")
print(name[len(name)-1])

##データリスト作成
for i in range(0,record):
    row = [i]+ [random.random() for j in range(1,values)]
##データ行出力
    for k in range(0,len(row)-1):
        print(row[k],end=",")
    print(row[len(row)-1])

# if __name__=="__main__":
