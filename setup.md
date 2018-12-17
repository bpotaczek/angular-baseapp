# Setting up your web project 

- [Setting up your web project](#setting-up-your-web-project)
  - [One time setup](#one-time-setup)
    - [Install nodejs](#install-nodejs)
    - [Install angular-cli](#install-angular-cli)
  - [kbxl-lib](#kbxl-lib)
  - [Your project](#your-project)

## One time setup

### Install nodejs 
* Download and install from https://nodejs.org/en/download/

### Install angular-cli

* In any console run 
  ```
  npm install -g @angular/cli
  ```

## kbxl-lib

1. Pull latest from TFS `$/TMS/TOPS/MAIN/Websites/KBXL-Lib/kbxl-lib` 
2. Open command console
3. Navigate to local kbxl-lib directory from step 1
4. Install dependencies `npm install`
5. Build project `npm run build-core && npm run build-shared`
6. Pack the library `npm run pack-core && npm run pack-shared`
7. Should output the file names if successful `kbxl-lib-core-x.x.x.tgz`

## Your project

1. Open command console
2. Navigate to your .UI project directory
3. Add kbxl-lib to your project
    1. Open package.json
    2. add the following lines to `dependencies:`
        1. "@kbxl-lib/core": "file:../KBXL-Lib/kbxl-lib/dist/kbxl-lib-core" (change path as needed)
        2. "@kbxl-lib/shared": "file:../KBXL-Lib/kbxl-lib/dist/kbxl-lib-shared" (change path as needed)
4. Install dependencies `npm install`
5. Add @ngrx to your project following `./adding ngrx to project.md`
