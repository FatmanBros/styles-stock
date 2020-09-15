cd ..\styles-stock-deploy
Remove-Item .\web\* -Recurse -Force

cd ..\styles-stock
npm install
ng build -c production

Move-Item .\dist ..\styles-stock-deploy\web -force

cd ..\styles-stock-deploy
npm install

cdk deploy --require-approval never