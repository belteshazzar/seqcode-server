# seqcode-server

to run:

$ node src/server.js 8002

start with pm2

$ pm2 start src/server.js --name seqcode-server --watch -- 8002

save config to restart on reboot

$ pm2 save

stop

$ pm2 stop seqcode-server

delete 

$ pm2 delete seqcode-server

list apps:

$ pm2 list

