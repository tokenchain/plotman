
#!/bin/bash
#cronjob every 5 min
LOCAL_VARIABLLE="just in time now"

run_remote() {
    echo "$LOCAL_VARIABLLE"
    ./home/ipant/chia-blockchain/activate
}


ssh -p 6222 ipant@ipant1.tpddns.cn "$(set); run_remote"
