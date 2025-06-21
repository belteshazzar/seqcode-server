# seqcode-server

## deployment setup notes

ssh to server:

```bash
$ ssh -i "~/.ssh/MacBook.pem" ec2-user@52.64.31.37 
```

to deploy don't forget npm run copy-files 

```bash
$ git clone https://github.com/belteshazzar/seqcode-server.git
$ npm install
$ npm run copy-files
```

to run:

```bash
$ node src/server.js 8002
```

start with pm2

```bash
$ pm2 start src/server.js --name seqcode-server --watch -- 8002
```

save config to restart on reboot

```bash
$ pm2 save
```

stop

```bash
$ pm2 stop seqcode-server
```

delete 

```bash
$ pm2 delete seqcode-server
```

list apps:

```bash
$ pm2 list
```
