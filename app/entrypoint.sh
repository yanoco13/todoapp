#!/bin/sh

# ソースディレクトリに移動
cd /usr/src/app/src

# Main.javaをコンパイル
javac Main.java

# コンパイルが成功したら実行
if [ $? -eq 0 ]; then
    java Main
else
    echo "Compilation failed"
    exit 1
fi