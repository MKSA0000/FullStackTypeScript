cd ../HandsOnTypeScript/
for i in {1..3}
do
    mkdir Chap$i
    echo "created dir: Chap$i"

    cp -a -r ../.vscode/ ../HandsOnTypeScript/Chap$i
    cp ../tsconfig.json ../HandsOnTypeScript/Chap$i
    echo "copied vscode setting files for Chap$i"
    cd Chap$i
        npm init -y --silent
        npm install -y --silent typescript
        echo "npm initialization done for Chap$i"
    cd ..
done
read -n 1 -r -s -p $'Press enter to continue...\n'