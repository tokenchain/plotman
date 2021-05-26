import { version, Contract } from "tronweb";
import BaseContract from "./base/base";
export class TRC975 extends BaseContract {
    constructor(tron) {
        super();
        this.__debug = true;
        this.tronweb = null;
        this.based_version = version;
        this.tronweb = tron;
    }
    static Instance() {
        if (window && window.hasOwnProperty("___contract__TRC975__")) {
            const obj = window.___contract__TRC975__;
            if (obj instanceof TRC975) {
                return (obj);
            }
            else {
                return (obj);
            }
        }
        else {
            return false;
        }
    }
    async init(contract_address) {
        this.contract = await new Contract(this.tronweb, TRC975.ABI(), contract_address);
        this.contract_address_t = contract_address;
        if (window && !window.hasOwnProperty("___contract__TRC975__")) {
            window.___contract__TRC975__ = this;
        }
    }
    setDebug(bool) {
        this.__debug = bool;
    }
    isVersionCompatible() {
        return this.based_version === this.tronweb.version;
    }
    async CANNOT_BE_SMART_CONTRACT() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.CANNOT_BE_SMART_CONTRACT()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 CANNOT_BE_SMART_CONTRACT");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async CONTRACT_IS_FINALIZED() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.CONTRACT_IS_FINALIZED()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 CONTRACT_IS_FINALIZED");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async INVALID_AMOUNT() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.INVALID_AMOUNT()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 INVALID_AMOUNT");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async INVALID_DONOR() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.INVALID_DONOR()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 INVALID_DONOR");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async INVALID_LEVEL() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.INVALID_LEVEL()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 INVALID_LEVEL");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async INVALID_MATRIX() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.INVALID_MATRIX()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 INVALID_MATRIX");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async INVITECODE_EXIST() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.INVITECODE_EXIST()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 INVITECODE_EXIST");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async LAST_LEVEL() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.LAST_LEVEL()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 LAST_LEVEL");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async LEVEL_ALREADY_ACTIVATED() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.LEVEL_ALREADY_ACTIVATED()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 LEVEL_ALREADY_ACTIVATED");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async MIN_PRICE_TRX() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.MIN_PRICE_TRX()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 MIN_PRICE_TRX");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async NOT_USER_ADDRESS() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.NOT_USER_ADDRESS()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 NOT_USER_ADDRESS");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async REFERCODE_NOT_EXIST() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.REFERCODE_NOT_EXIST()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 REFERCODE_NOT_EXIST");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async REFERRER_LEVEL_INACTIVE() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.REFERRER_LEVEL_INACTIVE()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 REFERRER_LEVEL_INACTIVE");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async REFERRER_NOT_EXIST() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.REFERRER_NOT_EXIST()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 REFERRER_NOT_EXIST");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async SNAPTIME_IS_OVER() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.SNAPTIME_IS_OVER()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 SNAPTIME_IS_OVER");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async USER_ALREADY_EXIST() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.USER_ALREADY_EXIST()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 USER_ALREADY_EXIST");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async USER_NOT_EXIST() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.USER_NOT_EXIST()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 USER_NOT_EXIST");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async addWhitelistAdmin(account) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: false,
            callValue: 0,
        };
        let val = await this.contract.addWhitelistAdmin(account)
            .send(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 addWhitelistAdmin");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async bang(kingAdd, code) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: false,
            callValue: 0,
        };
        let val = await this.contract.bang(kingAdd, code)
            .send(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 bang");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async codeMapUserId(index_0) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.codeMapUserId(index_0)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 codeMapUserId");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async compareStr(src, src_compared) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.compareStr(src, src_compared)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 compareStr");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async contractDeployTime() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.contractDeployTime()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 contractDeployTime");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async findFreeX3Referrer(userAddress, level) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.findFreeX3Referrer(userAddress, level)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 findFreeX3Referrer");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async findFreeX6Referrer(userAddress, level) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.findFreeX6Referrer(userAddress, level)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 findFreeX6Referrer");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async fukuoka() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.fukuoka()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 fukuoka");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async idToAddress(index_0) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.idToAddress(index_0)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 idToAddress");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async isCheckCodeExist(code) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.isCheckCodeExist(code)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 isCheckCodeExist");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async isLocked() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.isLocked()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 isLocked");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async isOwner() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.isOwner()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 isOwner");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async isUserExists(user) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.isUserExists(user)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 isUserExists");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async isWhitelistAdmin(account) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.isWhitelistAdmin(account)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 isWhitelistAdmin");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async katana(amount) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: false,
            callValue: 0,
        };
        let val = await this.contract.katana(amount)
            .send(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 katana");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async kawasaki(user) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.kawasaki(user)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 kawasaki");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async kimigairebakowakunai() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: false,
            callValue: 0,
        };
        let val = await this.contract.kimigairebakowakunai()
            .send(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 kimigairebakowakunai");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async lastUserId() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.lastUserId()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 lastUserId");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async levelPrice(index_0) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.levelPrice(index_0)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 levelPrice");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async lock() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: false,
            callValue: 0,
        };
        let val = await this.contract.lock()
            .send(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 lock");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async nana(_min_price_) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: false,
            callValue: 0,
        };
        let val = await this.contract.nana(_min_price_)
            .send(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 nana");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async newChapter(matrix, level, trx) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: false,
            callValue: trx,
        };
        let val = await this.contract.newChapter(matrix, level)
            .send(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 newChapter");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async noReferralReg(v0, trx) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: false,
            callValue: trx,
        };
        let val = await this.contract.noReferralReg(v0)
            .send(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 noReferralReg");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async osaka(userAddress, matrix, level) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: false,
            callValue: 0,
        };
        let val = await this.contract.osaka(userAddress, matrix, level)
            .send(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 osaka");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async owner() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.owner()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 owner");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async paris() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.paris()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 paris");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async removeWhitelistAdmin(account) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: false,
            callValue: 0,
        };
        let val = await this.contract.removeWhitelistAdmin(account)
            .send(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 removeWhitelistAdmin");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async renounceOwnership() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: false,
            callValue: 0,
        };
        let val = await this.contract.renounceOwnership()
            .send(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 renounceOwnership");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async rome() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.rome()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 rome");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async sapporo(userAddress, v0, v1) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: false,
            callValue: 0,
        };
        let val = await this.contract.sapporo(userAddress, v0, v1)
            .send(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 sapporo");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async transferOwnership(newOwner) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: false,
            callValue: 0,
        };
        let val = await this.contract.transferOwnership(newOwner)
            .send(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 transferOwnership");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async unlock() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: false,
            callValue: 0,
        };
        let val = await this.contract.unlock()
            .send(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 unlock");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async userIds(index_0) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.userIds(index_0)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 userIds");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async users(index_0) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.users(index_0)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 users");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async usersActiveX3Levels(userAddress, level) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.usersActiveX3Levels(userAddress, level)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 usersActiveX3Levels");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async usersActiveX6Levels(userAddress, level) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.usersActiveX6Levels(userAddress, level)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 usersActiveX6Levels");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async usersX3Matrix(userAddress, level) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.usersX3Matrix(userAddress, level)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 usersX3Matrix");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async usersX6Matrix(userAddress, level) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.usersX6Matrix(userAddress, level)
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 usersX6Matrix");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async vegasRegular(v0, v1, trx) {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: false,
            callValue: trx,
        };
        let val = await this.contract.vegasRegular(v0, v1)
            .send(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 vegasRegular");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async whatTime() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.whatTime()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 whatTime");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async yokohama() {
        let callparams = {
            userFeePercentage: 30,
            feeLimit: 100000000,
            shouldPollResponse: true,
            _isConstant: true,
            callValue: 0,
        };
        let val = await this.contract.yokohama()
            .call(callparams);
        if (this.__debug) {
            console.group("==> debug return raw 💮 yokohama");
            console.log(val);
            console.groupEnd();
        }
        return val;
    }
    async eventQ(event_name, page, since = 0) {
        const data = await this.tronweb && this.contract && this.tronweb.getEventResult(this.contract_address_t, since, event_name, 0, 20, page);
        return data;
    }
    async startEventListeners() {
        await this.contract && this.contract.Donor().watch((err, event_payload) => {
            if (err)
                return console.error('Failed to bind event listener:', err);
            if (event_payload) {
                let { result, block, transaction, name, contract } = event_payload;
                if (this.__debug) {
                    console.group('New event received');
                    console.log('- Contract Address:', contract);
                    console.log('- Event Name:', name);
                    console.log('- Transaction:', transaction);
                    console.log('- Block number:', block);
                    console.log('- Result:', result, '\n');
                    console.groupEnd();
                }
                this.emit("event_Donor", event_payload);
            }
        });
        await this.contract && this.contract.Failure().watch((err, event_payload) => {
            if (err)
                return console.error('Failed to bind event listener:', err);
            if (event_payload) {
                let { result, block, transaction, name, contract } = event_payload;
                if (this.__debug) {
                    console.group('New event received');
                    console.log('- Contract Address:', contract);
                    console.log('- Event Name:', name);
                    console.log('- Transaction:', transaction);
                    console.log('- Block number:', block);
                    console.log('- Result:', result, '\n');
                    console.groupEnd();
                }
                this.emit("event_Failure", event_payload);
            }
        });
        await this.contract && this.contract.MissedEthReceive().watch((err, event_payload) => {
            if (err)
                return console.error('Failed to bind event listener:', err);
            if (event_payload) {
                let { result, block, transaction, name, contract } = event_payload;
                if (this.__debug) {
                    console.group('New event received');
                    console.log('- Contract Address:', contract);
                    console.log('- Event Name:', name);
                    console.log('- Transaction:', transaction);
                    console.log('- Block number:', block);
                    console.log('- Result:', result, '\n');
                    console.groupEnd();
                }
                this.emit("event_MissedEthReceive", event_payload);
            }
        });
        await this.contract && this.contract.NewUserPlace().watch((err, event_payload) => {
            if (err)
                return console.error('Failed to bind event listener:', err);
            if (event_payload) {
                let { result, block, transaction, name, contract } = event_payload;
                if (this.__debug) {
                    console.group('New event received');
                    console.log('- Contract Address:', contract);
                    console.log('- Event Name:', name);
                    console.log('- Transaction:', transaction);
                    console.log('- Block number:', block);
                    console.log('- Result:', result, '\n');
                    console.groupEnd();
                }
                this.emit("event_NewUserPlace", event_payload);
            }
        });
        await this.contract && this.contract.OwnershipTransferred().watch((err, event_payload) => {
            if (err)
                return console.error('Failed to bind event listener:', err);
            if (event_payload) {
                let { result, block, transaction, name, contract } = event_payload;
                if (this.__debug) {
                    console.group('New event received');
                    console.log('- Contract Address:', contract);
                    console.log('- Event Name:', name);
                    console.log('- Transaction:', transaction);
                    console.log('- Block number:', block);
                    console.log('- Result:', result, '\n');
                    console.groupEnd();
                }
                this.emit("event_OwnershipTransferred", event_payload);
            }
        });
        await this.contract && this.contract.PriceMark().watch((err, event_payload) => {
            if (err)
                return console.error('Failed to bind event listener:', err);
            if (event_payload) {
                let { result, block, transaction, name, contract } = event_payload;
                if (this.__debug) {
                    console.group('New event received');
                    console.log('- Contract Address:', contract);
                    console.log('- Event Name:', name);
                    console.log('- Transaction:', transaction);
                    console.log('- Block number:', block);
                    console.log('- Result:', result, '\n');
                    console.groupEnd();
                }
                this.emit("event_PriceMark", event_payload);
            }
        });
        await this.contract && this.contract.Registration().watch((err, event_payload) => {
            if (err)
                return console.error('Failed to bind event listener:', err);
            if (event_payload) {
                let { result, block, transaction, name, contract } = event_payload;
                if (this.__debug) {
                    console.group('New event received');
                    console.log('- Contract Address:', contract);
                    console.log('- Event Name:', name);
                    console.log('- Transaction:', transaction);
                    console.log('- Block number:', block);
                    console.log('- Result:', result, '\n');
                    console.groupEnd();
                }
                this.emit("event_Registration", event_payload);
            }
        });
        await this.contract && this.contract.Reinvest().watch((err, event_payload) => {
            if (err)
                return console.error('Failed to bind event listener:', err);
            if (event_payload) {
                let { result, block, transaction, name, contract } = event_payload;
                if (this.__debug) {
                    console.group('New event received');
                    console.log('- Contract Address:', contract);
                    console.log('- Event Name:', name);
                    console.log('- Transaction:', transaction);
                    console.log('- Block number:', block);
                    console.log('- Result:', result, '\n');
                    console.groupEnd();
                }
                this.emit("event_Reinvest", event_payload);
            }
        });
        await this.contract && this.contract.SentExtraEthDividends().watch((err, event_payload) => {
            if (err)
                return console.error('Failed to bind event listener:', err);
            if (event_payload) {
                let { result, block, transaction, name, contract } = event_payload;
                if (this.__debug) {
                    console.group('New event received');
                    console.log('- Contract Address:', contract);
                    console.log('- Event Name:', name);
                    console.log('- Transaction:', transaction);
                    console.log('- Block number:', block);
                    console.log('- Result:', result, '\n');
                    console.groupEnd();
                }
                this.emit("event_SentExtraEthDividends", event_payload);
            }
        });
        await this.contract && this.contract.Upgrade().watch((err, event_payload) => {
            if (err)
                return console.error('Failed to bind event listener:', err);
            if (event_payload) {
                let { result, block, transaction, name, contract } = event_payload;
                if (this.__debug) {
                    console.group('New event received');
                    console.log('- Contract Address:', contract);
                    console.log('- Event Name:', name);
                    console.log('- Transaction:', transaction);
                    console.log('- Block number:', block);
                    console.log('- Result:', result, '\n');
                    console.groupEnd();
                }
                this.emit("event_Upgrade", event_payload);
            }
        });
        await this.contract && this.contract.traillock().watch((err, event_payload) => {
            if (err)
                return console.error('Failed to bind event listener:', err);
            if (event_payload) {
                let { result, block, transaction, name, contract } = event_payload;
                if (this.__debug) {
                    console.group('New event received');
                    console.log('- Contract Address:', contract);
                    console.log('- Event Name:', name);
                    console.log('- Transaction:', transaction);
                    console.log('- Block number:', block);
                    console.log('- Result:', result, '\n');
                    console.groupEnd();
                }
                this.emit("event_traillock", event_payload);
            }
        });
    }
    static ABI() {
        const abi = [
            {
                inputs: [],
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'constructor',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'from',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Donor',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'fail_code',
                        type: 'uint8',
                        indexed: false,
                    },
                ],
                name: 'Failure',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'receiver',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'from',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'matrix',
                        type: 'uint8',
                        indexed: false,
                    },
                    {
                        name: 'level',
                        type: 'uint8',
                        indexed: false,
                    },
                ],
                name: 'MissedEthReceive',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'referrer',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'matrix',
                        type: 'uint8',
                        indexed: false,
                    },
                    {
                        name: 'level',
                        type: 'uint8',
                        indexed: false,
                    },
                    {
                        name: 'place',
                        type: 'uint8',
                        indexed: false,
                    },
                ],
                name: 'NewUserPlace',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'previousOwner',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'newOwner',
                        type: 'address',
                        indexed: true,
                    },
                ],
                name: 'OwnershipTransferred',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'starting_price',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'level',
                        type: 'uint8',
                        indexed: false,
                    },
                ],
                name: 'PriceMark',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'referrer',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'userId',
                        type: 'uint256',
                        indexed: true,
                    },
                    {
                        name: 'referrerId',
                        type: 'uint256',
                        indexed: false,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Registration',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'currentReferrer',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'caller',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'matrix',
                        type: 'uint8',
                        indexed: false,
                    },
                    {
                        name: 'level',
                        type: 'uint8',
                        indexed: false,
                    },
                ],
                name: 'Reinvest',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'from',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'receiver',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'matrix',
                        type: 'uint8',
                        indexed: false,
                    },
                    {
                        name: 'level',
                        type: 'uint8',
                        indexed: false,
                    },
                ],
                name: 'SentExtraEthDividends',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'user',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'referrer',
                        type: 'address',
                        indexed: true,
                    },
                    {
                        name: 'matrix',
                        type: 'uint8',
                        indexed: false,
                    },
                    {
                        name: 'level',
                        type: 'uint8',
                        indexed: false,
                    },
                    {
                        name: 'amount',
                        type: 'uint256',
                        indexed: false,
                    },
                ],
                name: 'Upgrade',
                outputs: [],
                type: 'event',
            },
            {
                anonymous: false,
                inputs: [
                    {
                        name: 'value',
                        type: 'uint8',
                        indexed: false,
                    },
                ],
                name: 'traillock',
                outputs: [],
                type: 'event',
            },
            {
                inputs: [],
                outputs: [],
                payable: true,
                stateMutability: 'payable',
                type: 'fallback',
            },
            {
                constant: true,
                inputs: [],
                name: 'CANNOT_BE_SMART_CONTRACT',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'CONTRACT_IS_FINALIZED',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'INVALID_AMOUNT',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'INVALID_DONOR',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'INVALID_LEVEL',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'INVALID_MATRIX',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'INVITECODE_EXIST',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'LAST_LEVEL',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'LEVEL_ALREADY_ACTIVATED',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'MIN_PRICE_TRX',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'NOT_USER_ADDRESS',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'REFERCODE_NOT_EXIST',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'REFERRER_LEVEL_INACTIVE',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'REFERRER_NOT_EXIST',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'SNAPTIME_IS_OVER',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'USER_ALREADY_EXIST',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'USER_NOT_EXIST',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'addWhitelistAdmin',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'kingAdd',
                        type: 'address',
                    },
                    {
                        name: 'code',
                        type: 'string',
                    },
                ],
                name: 'bang',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'string',
                    },
                ],
                name: 'codeMapUserId',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'src',
                        type: 'string',
                    },
                    {
                        name: 'src_compared',
                        type: 'string',
                    },
                ],
                name: 'compareStr',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'pure',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'contractDeployTime',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'userAddress',
                        type: 'address',
                    },
                    {
                        name: 'level',
                        type: 'uint8',
                    },
                ],
                name: 'findFreeX3Referrer',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'userAddress',
                        type: 'address',
                    },
                    {
                        name: 'level',
                        type: 'uint8',
                    },
                ],
                name: 'findFreeX6Referrer',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'fukuoka',
                outputs: [
                    {
                        name: 'x3Levels',
                        type: 'bool[12]',
                    },
                    {
                        name: 'x6Levels',
                        type: 'bool[12]',
                    },
                    {
                        name: 'x3LastTrue',
                        type: 'uint8',
                    },
                    {
                        name: 'x6LastTrue',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'uint256',
                    },
                ],
                name: 'idToAddress',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'code',
                        type: 'string',
                    },
                ],
                name: 'isCheckCodeExist',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'isLocked',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'isOwner',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'user',
                        type: 'address',
                    },
                ],
                name: 'isUserExists',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'isWhitelistAdmin',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'amount',
                        type: 'uint256',
                    },
                ],
                name: 'katana',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'user',
                        type: 'address',
                    },
                ],
                name: 'kawasaki',
                outputs: [
                    {
                        name: 'x3Levels',
                        type: 'bool[12]',
                    },
                    {
                        name: 'x6Levels',
                        type: 'bool[12]',
                    },
                    {
                        name: 'x3LastTrue',
                        type: 'uint8',
                    },
                    {
                        name: 'x6LastTrue',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [],
                name: 'kimigairebakowakunai',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'lastUserId',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'uint8',
                    },
                ],
                name: 'levelPrice',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [],
                name: 'lock',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: '_min_price_',
                        type: 'uint256',
                    },
                ],
                name: 'nana',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'matrix',
                        type: 'uint8',
                    },
                    {
                        name: 'level',
                        type: 'uint8',
                    },
                ],
                name: 'newChapter',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: true,
                stateMutability: 'payable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'v0',
                        type: 'string',
                    },
                ],
                name: 'noReferralReg',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: true,
                stateMutability: 'payable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'userAddress',
                        type: 'address',
                    },
                    {
                        name: 'matrix',
                        type: 'uint8',
                    },
                    {
                        name: 'level',
                        type: 'uint8',
                    },
                ],
                name: 'osaka',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'owner',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'paris',
                outputs: [
                    {
                        name: 'systemInfod',
                        type: 'uint256[8]',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'account',
                        type: 'address',
                    },
                ],
                name: 'removeWhitelistAdmin',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [],
                name: 'renounceOwnership',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'rome',
                outputs: [
                    {
                        name: 'level_max',
                        type: 'uint256',
                    },
                    {
                        name: 'price_list',
                        type: 'uint256[12]',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'userAddress',
                        type: 'address',
                    },
                    {
                        name: 'v0',
                        type: 'string',
                    },
                    {
                        name: 'v1',
                        type: 'string',
                    },
                ],
                name: 'sapporo',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'newOwner',
                        type: 'address',
                    },
                ],
                name: 'transferOwnership',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: false,
                inputs: [],
                name: 'unlock',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'uint256',
                    },
                ],
                name: 'userIds',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'index_0',
                        type: 'address',
                    },
                ],
                name: 'users',
                outputs: [
                    {
                        name: 'id',
                        type: 'uint256',
                    },
                    {
                        name: 'inviteCode',
                        type: 'string',
                    },
                    {
                        name: 'referrerCode',
                        type: 'string',
                    },
                    {
                        name: 'referrer',
                        type: 'address',
                    },
                    {
                        name: 'partnersCount',
                        type: 'uint256',
                    },
                    {
                        name: 'joinedTime',
                        type: 'uint256',
                    },
                    {
                        name: 'earning',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'userAddress',
                        type: 'address',
                    },
                    {
                        name: 'level',
                        type: 'uint8',
                    },
                ],
                name: 'usersActiveX3Levels',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'userAddress',
                        type: 'address',
                    },
                    {
                        name: 'level',
                        type: 'uint8',
                    },
                ],
                name: 'usersActiveX6Levels',
                outputs: [
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'userAddress',
                        type: 'address',
                    },
                    {
                        name: 'level',
                        type: 'uint8',
                    },
                ],
                name: 'usersX3Matrix',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                    {
                        name: '',
                        type: 'address[]',
                    },
                    {
                        name: '',
                        type: 'bool',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [
                    {
                        name: 'userAddress',
                        type: 'address',
                    },
                    {
                        name: 'level',
                        type: 'uint8',
                    },
                ],
                name: 'usersX6Matrix',
                outputs: [
                    {
                        name: '',
                        type: 'address',
                    },
                    {
                        name: '',
                        type: 'address[]',
                    },
                    {
                        name: '',
                        type: 'address[]',
                    },
                    {
                        name: '',
                        type: 'bool',
                    },
                    {
                        name: '',
                        type: 'address',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: false,
                inputs: [
                    {
                        name: 'v0',
                        type: 'string',
                    },
                    {
                        name: 'v1',
                        type: 'string',
                    },
                ],
                name: 'vegasRegular',
                outputs: [
                    {
                        name: '',
                        type: 'uint8',
                    },
                ],
                payable: true,
                stateMutability: 'payable',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'whatTime',
                outputs: [
                    {
                        name: '',
                        type: 'uint256',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
            {
                constant: true,
                inputs: [],
                name: 'yokohama',
                outputs: [
                    {
                        name: 'maimai',
                        type: 'uint256[4]',
                    },
                    {
                        name: 'iv',
                        type: 'string',
                    },
                    {
                        name: 'ref',
                        type: 'string',
                    },
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function',
            },
        ];
        return abi;
    }
}
TRC975.deployedBytecode = "60806040526003805461ffff1916610c0017905561015e600455600060058190556001600b55600c553480156200003557600080fd5b506001805460ff1916811790556000620000576001600160e01b03620000b316565b60018054610100600160a81b0319166101006001600160a01b03841690810291909117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350620000b7565b3390565b61599280620000c76000396000f3fe6080604052600436106103815760003560e01c80639cc102fc116101d1578063d86d959011610102578063ecabdf79116100a0578063f820e9a71161006f578063f820e9a7146113dd578063f83d08ba146113f2578063fa45323d14611407578063fae827911461144357610381565b8063ecabdf791461133e578063f2fde38b1461136b578063f3d9e5b21461139e578063f7eb76f4146113b357610381565b8063e06e8dbd116100dc578063e06e8dbd146112b0578063e13833d9146112ec578063e82c084f14611301578063e85f45eb1461132957610381565b8063d86d959014611257578063d8909b391461126c578063d8b749fe1461073857610381565b8063aec0914b1161016f578063b6f3642a11610149578063b6f3642a1461113c578063b923991e14611151578063bb5f747b1461120f578063be6ae1f61461124257610381565b8063aec0914b146110d6578063b20bb419146110eb578063b2f7543a1461110057610381565b8063a69df4b5116101ab578063a69df4b514610dae578063a87430ba14610dc3578063a962982014610f09578063aac0fbb61461102557610381565b80639cc102fc14610c8b5780639f54790d14610d84578063a4e2d63414610d9957610381565b8063509222cd116102b65780637362d9c81161025457806387c5d5cc1161022357806387c5d5cc14610b165780638da5cb5b14610c4c5780638f32d59b14610c6157806397dd7b5714610c7657610381565b80637362d9c8146109fb57806375cc83a014610a2e5780637c22e01214610a4357806383ba31b214610a6d57610381565b80635a71f421116102905780635a71f421146109495780636840a4641461095e5780636897e974146109b3578063715018a6146109e657610381565b8063509222cd146108935780635281a6ef146108c65780635299c3141461093457610381565b806326598d91116103235780632a2d0c47116102fd5780632a2d0c471461074d578063348d44871461079357806337434dde146107a85780634635fd681461086957610381565b806326598d911461064857806326d7b8021461072357806329c704001461073857610381565b806310a228ae1161035f57806310a228ae1461050d57806319e685ec146105d05780631b84e4d41461061e5780632584b4741461063357610381565b806302faf00c146103e057806307279e2a146104925780630da93a6a146104e2575b610389611458565b610392576103de565b61039a61145d565b6001600160a01b03167f31f6049f8ee13763f892f5609344c9d5a0be175dff998e75c53f82c6fc7561dc6103cc611458565b60408051918252519081900360200190a25b005b3480156103ec57600080fd5b506104136004803603602081101561040357600080fd5b50356001600160a01b0316611461565b604051808561018080838360005b83811015610439578181015183820152602001610421565b5050505090500184600c60200280838360005b8381101561046457818101518382015260200161044c565b505050509050018360ff1660ff1681526020018260ff1660ff16815260200194505050505060405180910390f35b34801561049e57600080fd5b506104ce600480360360408110156104b557600080fd5b5080356001600160a01b0316906020013560ff166114e5565b604080519115158252519081900360200190f35b3480156104ee57600080fd5b506104f761151b565b6040805160ff9092168252519081900360200190f35b34801561051957600080fd5b506105be6004803603602081101561053057600080fd5b810190602081018135600160201b81111561054a57600080fd5b82018360208201111561055c57600080fd5b803590602001918460018302840111600160201b8311171561057d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611520945050505050565b60408051918252519081900360200190f35b3480156105dc57600080fd5b506105e561153d565b604051808261010080838360005b8381101561060b5781810151838201526020016105f3565b5050505090500191505060405180910390f35b34801561062a57600080fd5b506104f761159f565b34801561063f57600080fd5b506104f76115a4565b34801561065457600080fd5b506104f76004803603606081101561066b57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561069557600080fd5b8201836020820111156106a757600080fd5b803590602001918460018302840111600160201b831117156106c857600080fd5b919390929091602081019035600160201b8111156106e557600080fd5b8201836020820111156106f757600080fd5b803590602001918460018302840111600160201b8311171561071857600080fd5b5090925090506115a9565b34801561072f57600080fd5b506104f761169d565b34801561074457600080fd5b506104f76116a2565b34801561075957600080fd5b506107776004803603602081101561077057600080fd5b50356116a7565b604080516001600160a01b039092168252519081900360200190f35b34801561079f57600080fd5b506105be6116c2565b3480156107b457600080fd5b506103de600480360360408110156107cb57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b8111156107f557600080fd5b82018360208201111561080757600080fd5b803590602001918460018302840111600160201b8311171561082857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506116c8945050505050565b34801561087557600080fd5b506107776004803603602081101561088c57600080fd5b503561196c565b34801561089f57600080fd5b506104ce600480360360208110156108b657600080fd5b50356001600160a01b0316611987565b6104f7600480360360208110156108dc57600080fd5b810190602081018135600160201b8111156108f657600080fd5b82018360208201111561090857600080fd5b803590602001918460018302840111600160201b8311171561092957600080fd5b5090925090506119a4565b34801561094057600080fd5b506104f7611b78565b34801561095557600080fd5b506104f7611b7d565b34801561096a57600080fd5b50610973611b82565b604051828152602081018261018080838360005b8381101561099f578181015183820152602001610987565b505050509050019250505060405180910390f35b3480156109bf57600080fd5b506103de600480360360208110156109d657600080fd5b50356001600160a01b0316611bfa565b3480156109f257600080fd5b506103de611c55565b348015610a0757600080fd5b506103de60048036036020811015610a1e57600080fd5b50356001600160a01b0316611cec565b348015610a3a57600080fd5b506104f7611d44565b348015610a4f57600080fd5b506103de60048036036020811015610a6657600080fd5b5035611d49565b348015610a7957600080fd5b50610aa960048036036040811015610a9057600080fd5b5080356001600160a01b0316906020013560ff16611da8565b604080516001600160a01b0385168152821515918101919091526060602080830182815285519284019290925284516080840191868101910280838360005b83811015610b00578181015183820152602001610ae8565b5050505090500194505050505060405180910390f35b348015610b2257600080fd5b506104ce60048036036040811015610b3957600080fd5b810190602081018135600160201b811115610b5357600080fd5b820183602082011115610b6557600080fd5b803590602001918460018302840111600160201b83111715610b8657600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b811115610bd857600080fd5b820183602082011115610bea57600080fd5b803590602001918460018302840111600160201b83111715610c0b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611e57945050505050565b348015610c5857600080fd5b50610777611f4c565b348015610c6d57600080fd5b506104ce611f60565b348015610c8257600080fd5b506104f7611f8b565b348015610c9757600080fd5b50610cc760048036036040811015610cae57600080fd5b5080356001600160a01b0316906020013560ff16611f90565b604080516001600160a01b03808816825284151560608301528316608082015260a060208083018281528851928401929092528751929391929184019160c0850191898101910280838360005b83811015610d2c578181015183820152602001610d14565b50505050905001838103825286818151815260200191508051906020019060200280838360005b83811015610d6b578181015183820152602001610d53565b5050505090500197505050505050505060405180910390f35b348015610d9057600080fd5b506105be6120b1565b348015610da557600080fd5b506104ce6120b7565b348015610dba57600080fd5b506103de6120c3565b348015610dcf57600080fd5b50610df660048036036020811015610de657600080fd5b50356001600160a01b0316612121565b604051808881526020018060200180602001876001600160a01b03166001600160a01b03168152602001868152602001858152602001848152602001838103835289818151815260200191508051906020019080838360005b83811015610e67578181015183820152602001610e4f565b50505050905090810190601f168015610e945780820380516001836020036101000a031916815260200191505b5083810382528851815288516020918201918a019080838360005b83811015610ec7578181015183820152602001610eaf565b50505050905090810190601f168015610ef45780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b348015610f1557600080fd5b50610f1e61227d565b6040518084608080838360005b83811015610f43578181015183820152602001610f2b565b505050509050018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610f87578181015183820152602001610f6f565b50505050905090810190601f168015610fb45780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015610fe7578181015183820152602001610fcf565b50505050905090810190601f1680156110145780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b34801561103157600080fd5b506104ce6004803603602081101561104857600080fd5b810190602081018135600160201b81111561106257600080fd5b82018360208201111561107457600080fd5b803590602001918460018302840111600160201b8311171561109557600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061247c945050505050565b3480156110e257600080fd5b506104136124e9565b3480156110f757600080fd5b506103de612520565b34801561110c57600080fd5b506104ce6004803603604081101561112357600080fd5b5080356001600160a01b0316906020013560ff166125bf565b34801561114857600080fd5b506104f76125f0565b6104f76004803603604081101561116757600080fd5b810190602081018135600160201b81111561118157600080fd5b82018360208201111561119357600080fd5b803590602001918460018302840111600160201b831117156111b457600080fd5b919390929091602081019035600160201b8111156111d157600080fd5b8201836020820111156111e357600080fd5b803590602001918460018302840111600160201b8311171561120457600080fd5b5090925090506125f5565b34801561121b57600080fd5b506104ce6004803603602081101561123257600080fd5b50356001600160a01b0316612768565b34801561124e57600080fd5b506105be612789565b34801561126357600080fd5b506104f761278d565b34801561127857600080fd5b506104f76004803603606081101561128f57600080fd5b506001600160a01b038135169060ff60208201358116916040013516612792565b3480156112bc57600080fd5b50610777600480360360408110156112d357600080fd5b5080356001600160a01b0316906020013560ff1661281b565b3480156112f857600080fd5b506104f7612859565b6104f76004803603604081101561131757600080fd5b5060ff8135811691602001351661285e565b34801561133557600080fd5b506105be612928565b34801561134a57600080fd5b506105be6004803603602081101561136157600080fd5b503560ff1661292e565b34801561137757600080fd5b506103de6004803603602081101561138e57600080fd5b50356001600160a01b0316612940565b3480156113aa57600080fd5b506104f7612990565b3480156113bf57600080fd5b506103de600480360360208110156113d657600080fd5b5035612995565b3480156113e957600080fd5b506104f7612a40565b3480156113fe57600080fd5b506103de612a45565b34801561141357600080fd5b506107776004803603604081101561142a57600080fd5b5080356001600160a01b0316906020013560ff16612aa1565b34801561144f57600080fd5b506104f7612adf565b345b90565b3390565b611469615695565b611471615695565b60008061148461147f61145d565b612768565b806114925750611492611f60565b6114cd5760405162461bcd60e51b81526004018080602001828103825260408152602001806158fe6040913960400191505060405180910390fd5b6114d685612ae4565b93509350935093509193509193565b6001600160a01b038216600090815260066020908152604080832060ff8086168552600790910190925290912054165b92915050565b600281565b805160208183018101805160098252928201919093012091525481565b6115456156b4565b6004548152600354610100900460ff1660208201526005546040820152600b54606082015242608082015260005460a0820152611580612bd1565b61158b57600061158e565b60015b60ff1660c08201524760e082015290565b600381565b600781565b60006115b661147f61145d565b806115c457506115c4611f60565b6115ff5760405162461bcd60e51b81526004018080602001828103825260408152602001806158fe6040913960400191505060405180910390fd5b611607612bd1565b1561161d576116166007612bde565b9050611694565b6116918686868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8a018190048102820181019092528881529250889150879081908401838280828437600092019190915250612c1f92505050565b90505b95945050505050565b600581565b600c81565b6007602052600090815260409020546001600160a01b031681565b600b5481565b6116d361147f61145d565b806116e157506116e1611f60565b61171c5760405162461bcd60e51b81526004018080602001828103825260408152602001806158fe6040913960400191505060405180910390fd5b61172582611987565b1561172f57611968565b61173c61015e600c61303f565b61174461145d565b600e80546001600160a01b039283166001600160a01b031991821617909155600d805492851692909116821790556000908152600660209081526040808320600181558151928301918290529183905290916117a49160028401916156d3565b5081516117ba90600183019060208501906156d3565b506003810180546001600160a01b0319908116909155600060048301819055600683018190554260058401556001908190527fb39221ace053465ec3453ce2b36430bd138b997ecea25c1043da0c366812b82880546001600160a01b0387169084168117909155600860209081527fad67d757c34507f157cacfa2e3153e9f260a2244f30428821be7be64587ac55f8054909416909117909255604051845191926009928692918291908401908083835b6020831061188a5780518252601f19909201916020918201910161186b565b51815160209384036101000a600019018019909216911617905292019485525060405193849003019092209290925550600190505b60035460ff6101009091048116908216116119125760ff8116600090815260078301602090815260408083208054600160ff199182168117909255600887019093529220805490911682179055016118bf565b61191a613127565b60408051600080825260208201819052825160019391926001600160a01b038916927fc1df0cc11cc2a40ae327c4da54a7bc5d5007047ac744e37eed7b461a7811721592918290030190a450505b5050565b6008602052600090815260409020546001600160a01b031681565b6001600160a01b0316600090815260066020526040902054151590565b6000806119af61145d565b9050803b80156119fa576040805162461bcd60e51b8152602060048201526011602482015270736f7272792068756d616e73206f6e6c7960781b604482015290519081900360640190fd5b611a0261145d565b6001600160a01b0316326001600160a01b031614611a5c576040805162461bcd60e51b8152602060048201526012602482015271736f7272792c2068756d616e73206f6e6c7960701b604482015290519081900360640190fd5b7fad67d757c34507f157cacfa2e3153e9f260a2244f30428821be7be64587ac55f546001600160a01b0316600090815260066020908152604091829020600190810180548451600261010094831615949094026000190190911692909204601f81018490048402830184019094528382526060939192909190830182828015611b265780601f10611afb57610100808354040283529160200191611b26565b820191906000526020600020905b815481529060010190602001808311611b0957829003601f168201915b50505050509050611b6e86868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525085925061312d915050565b9695505050505050565b600b81565b600f81565b6000611b8c615695565b600354610100900460ff16915060005b60035460ff61010090910481169082161015611be85760ff6001820181166000908152600a602052604090205490819084908416600c8110611bda57fe5b602002015250600101611b9c565b50600354610100900460ff1692909150565b611c02611f60565b611c41576040805162461bcd60e51b815260206004820181905260248201526000805160206158bc833981519152604482015290519081900360640190fd5b611c5260028263ffffffff6135ab16565b50565b611c5d611f60565b611c9c576040805162461bcd60e51b815260206004820181905260248201526000805160206158bc833981519152604482015290519081900360640190fd5b60015460405160009161010090046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360018054610100600160a81b0319169055565b611cf4611f60565b611d33576040805162461bcd60e51b815260206004820181905260248201526000805160206158bc833981519152604482015290519081900360640190fd5b611c5260028263ffffffff61361216565b600881565b611d5461147f61145d565b80611d625750611d62611f60565b611d9d5760405162461bcd60e51b81526004018080602001828103825260408152602001806158fe6040913960400191505060405180910390fd5b611c5281600c61303f565b6001600160a01b03828116600090815260066020908152604080832060ff8681168552600990910183528184208054600282015460019092018054855181880281018801909652808652969760609789979390911695919493909316929091849190830182828015611e4357602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611e25575b505050505091509250925092509250925092565b6000816040516020018082805190602001908083835b60208310611e8c5780518252601f199092019160209182019101611e6d565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120836040516020018082805190602001908083835b60208310611efa5780518252601f199092019160209182019101611edb565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052805190602001201415611f4357506001611515565b50600092915050565b60015461010090046001600160a01b031690565b60015460009061010090046001600160a01b0316611f7c61145d565b6001600160a01b031614905090565b600a81565b6001600160a01b03828116600090815260066020908152604080832060ff8681168552600a90910183528184208054600382015460058301546001840180548751818a0281018a0190985280885298996060998a998c998a9997841698949760029095019690941694909216929186919083018282801561203a57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161201c575b505050505093508280548060200260200160405190810160405280929190818152602001828054801561209657602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612078575b50505050509250945094509450945094509295509295909350565b60005481565b60035460ff1660011490565b6120ce61147f61145d565b806120dc57506120dc611f60565b6121175760405162461bcd60e51b81526004018080602001828103825260408152602001806158fe6040913960400191505060405180910390fd5b61211f613693565b565b6006602090815260009182526040918290208054600180830180548651600293821615610100026000190190911692909204601f8101869004860283018601909652858252919492939092908301828280156121be5780601f10612193576101008083540402835291602001916121be565b820191906000526020600020905b8154815290600101906020018083116121a157829003601f168201915b50505060028085018054604080516020601f60001961010060018716150201909416959095049283018590048502810185019091528181529596959450909250908301828280156122505780601f1061222557610100808354040283529160200191612250565b820191906000526020600020905b81548152906001019060200180831161223357829003601f168201915b5050505060038301546004840154600585015460069095015493946001600160a01b039092169390925087565b612285615751565b606080600061229261145d565b905061229c61576f565b60066000836001600160a01b03166001600160a01b031681526020019081526020016000206040518060e001604052908160008201548152602001600182018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561236f5780601f106123445761010080835404028352916020019161236f565b820191906000526020600020905b81548152906001019060200180831161235257829003601f168201915b5050509183525050600282810180546040805160206001841615610100026000190190931694909404601f810183900483028501830190915280845293810193908301828280156124015780601f106123d657610100808354040283529160200191612401565b820191906000526020600020905b8154815290600101906020018083116123e457829003601f168201915b505050918352505060038201546001600160a01b03166020808301919091526004830154604080840191909152600584015460608085019190915260069094015460809384015260c08501518a5284518a830152918401518983015260a0840151928901929092529082015191015195969095945092505050565b6000806009836040518082805190602001908083835b602083106124b15780518252601f199092019160209182019101612492565b51815160209384036101000a600019018019909216911617905292019485525060405193849003019092205492909211949350505050565b6124f1615695565b6124f9615695565b600080600061250661145d565b905061251181612ae4565b94509450945094505090919293565b61252b61147f61145d565b806125395750612539611f60565b6125745760405162461bcd60e51b81526004018080602001828103825260408152602001806158fe6040913960400191505060405180910390fd5b61258561257f611f4c565b476136d3565b600554612598904763ffffffff61372816565b6005556125b46125a6611f4c565b6001600160a01b031661145a565b6001600160a01b0316ff5b6001600160a01b0391909116600090815260066020908152604080832060ff94851684526008019091529020541690565b601081565b60008061260061145d565b9050803b801561264b576040805162461bcd60e51b8152602060048201526011602482015270736f7272792068756d616e73206f6e6c7960781b604482015290519081900360640190fd5b61265361145d565b6001600160a01b0316326001600160a01b0316146126ad576040805162461bcd60e51b8152602060048201526012602482015271736f7272792c2068756d616e73206f6e6c7960701b604482015290519081900360640190fd5b600061272288888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8c018190048102820181019092528a815292508a915089908190840183828082843760009201919091525061312d92505050565b905060ff81161561275d576000612748600261273c611458565b9063ffffffff61373a16565b905061275b61275561145d565b826136d3565b505b979650505050505050565b600061277b60028363ffffffff61374f16565b806115155750611515611f60565b4290565b600e81565b600061279f61147f61145d565b806127ad57506127ad611f60565b6127e85760405162461bcd60e51b81526004018080602001828103825260408152602001806158fe6040913960400191505060405180910390fd5b6127f0612bd1565b15612806576127ff6007612bde565b9050612814565b6128118484846137b6565b90505b9392505050565b60005b6001600160a01b038084166000908152600660205260409020600301541661284681846125bf565b15612852579050611515565b925061281e565b600681565b60008061286961145d565b9050803b80156128b4576040805162461bcd60e51b8152602060048201526011602482015270736f7272792068756d616e73206f6e6c7960781b604482015290519081900360640190fd5b6128bc61145d565b6001600160a01b0316326001600160a01b031614612916576040805162461bcd60e51b8152602060048201526012602482015271736f7272792c2068756d616e73206f6e6c7960701b604482015290519081900360640190fd5b61169461292161145d565b86866137b6565b61015e81565b600a6020526000908152604090205481565b612948611f60565b612987576040805162461bcd60e51b815260206004820181905260248201526000805160206158bc833981519152604482015290519081900360640190fd5b611c5281613b70565b600981565b6129a061147f61145d565b806129ae57506129ae611f60565b6129e95760405162461bcd60e51b81526004018080602001828103825260408152602001806158fe6040913960400191505060405180910390fd5b80612a14576129f961257f61145d565b600554612a0c904763ffffffff61372816565b600555611c52565b80471115611c5257612a2761275561145d565b600554612a3a908263ffffffff61372816565b60055550565b600d81565b612a5061147f61145d565b80612a5e5750612a5e611f60565b612a995760405162461bcd60e51b81526004018080602001828103825260408152602001806158fe6040913960400191505060405180910390fd5b61211f613c1c565b60005b6001600160a01b0380841660009081526006602052604090206003015416612acc81846114e5565b15612ad8579050611515565b9250612aa4565b600481565b612aec615695565b612af4615695565b6001600160a01b0383166000908152600660205260408120819060015b60035460ff610100909104811690821611612bc85760ff8082166000818152600785016020526040902054909116908790600c8110612b4c57fe5b911515602090920201528560ff8216600c8110612b6557fe5b602002015115612b73578093505b60ff8082166000818152600885016020526040902054909116908690600c8110612b9957fe5b911515602090920201528460ff8216600c8110612bb257fe5b602002015115612bc0578092505b600101612b11565b50509193509193565b6000546201518001421190565b6040805160ff83168152905160009183917f230739317a7f90b018762e0570d567293eac14d67441b810f714879dd6aed0bf9181900360200190a192915050565b60006009836040518082805190602001908083835b60208310612c535780518252601f199092019160209182019101612c34565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922054159150612c929050576127ff6010612bde565b6009826040518082805190602001908083835b60208310612cc45780518252601f199092019160209182019101612ca5565b51815160209384036101000a600019018019909216911617905292019485525060405193849003019092205415159150612d049050576127ff600f612bde565b612d0d84613c64565b15612d1c576127ff600d612bde565b612d2584611987565b15612d34576127ff6003612bde565b6000600760006009856040518082805190602001908083835b60208310612d6c5780518252601f199092019160209182019101612d4d565b51815160209384036101000a6000190180199092169116179052920194855250604080519485900382019094205485528401949094525001600020546001600160a01b03169150612dbe905081611987565b612dd457612dcc600b612bde565b915050612814565b600b80546001019055612df7612de8611458565b6005549063ffffffff613c7016565b6005556001600160a01b0385166000908152600660209081526040909120600b54815584519091612e2f9160028401918701906156d3565b508451612e4590600183019060208801906156d3565b506003810180546001600160a01b0319166001600160a01b0384161790556000600482018190556006820155426005820155600b5460405186516009918891819060208401908083835b60208310612eae5780518252601f199092019160209182019101612e8f565b51815160001960209485036101000a0190811690199190911617905292019485525060408051948590038201909420949094555050600b80546000908152600780855283822080546001600160a01b03808e166001600160a01b031992831681179093559454845260088088528685208054909216909217905560018084529187018652848320805460ff199081168417909155908701865284832080549091168217905591861681526006909352908220600481018054830190559190612f77908990612aa1565b60016000818152600986016020526040902080546001600160a01b0319166001600160a01b038416179055909150612fb29089908390613c7f565b612fc888612fc18a600161281b565b6001614009565b6001600160a01b03808916600081815260066020526040808220549388168083529120549091907fc1df0cc11cc2a40ae327c4da54a7bc5d5007047ac744e37eed7b461a7811721590613019611458565b6040805192835260208301919091528051918290030190a4506000979650505050505050565b6003805461ff00191661010060ff841602179055600482905561306582620f42406149ca565b6001600052600a6020527fbbc70db1b6c7afd11e79c0fb0051300458f1a3acb8ee9789d9b6b26c61ad9bc75560025b8160ff168160ff16116130e55760ff6000198201166000908152600a60205260409020546130c981600263ffffffff6149ca16565b60ff83166000908152600a602052604090205550600101613094565b6040805184815260ff8416602082015281517ff1c0821c5bdc701741ecbf5771c170230a21d64321bca87e7e4034f8cb71a0a1929181900390910190a1505050565b42600055565b60006009836040518082805190602001908083835b602083106131615780518252601f199092019160209182019101613142565b51815160209384036101000a60001901801990921691161790529201948552506040519384900301909220541591506131a79050576131a06010612bde565b9050611515565b6009826040518082805190602001908083835b602083106131d95780518252601f1990920191602091820191016131ba565b51815160209384036101000a6000190180199092169116179052920194855250604051938490030190922054151591506132199050576131a0600f612bde565b600e546001600160a01b031661322d61145d565b6001600160a01b031614613290576001600052600a6020527fbbc70db1b6c7afd11e79c0fb0051300458f1a3acb8ee9789d9b6b26c61ad9bc75461327890600263ffffffff6149ca16565b613280611458565b1015613290576131a06004612bde565b600061329a61145d565b90506000600760006009866040518082805190602001908083835b602083106132d45780518252601f1990920191602091820191016132b5565b51815160209384036101000a6000190180199092169116179052920194855250604080519485900382019094205485528401949094525001600020546001600160a01b03169150613326905082613c64565b1561333e57613335600d612bde565b92505050611515565b61334782611987565b15613356576133356003612bde565b61335f81611987565b61336d57613335600b612bde565b600b80546001019055613381612de8611458565b6005556001600160a01b0382166000908152600660209081526040909120600b548155865190916133b99160018401918901906156d3565b5084516133cf90600283019060208801906156d3565b506003810180546001600160a01b0319166001600160a01b0384161790556000600482018190556006820155426005820155600b5460405187516009918991819060208401908083835b602083106134385780518252601f199092019160209182019101613419565b51815160001960209485036101000a0190811690199190911617905292019485525060408051948590038201909420949094555050600b80546000908152600780855283822080546001600160a01b03808b166001600160a01b0319928316811790935594548452600880885286852080548316909317909255600388018054958a16959091168517905560018084529187018652848320805460ff19908116841790915590870186528483208054909116821790559181526006909352908220600481018054830190559190613510908690612aa1565b60016000818152600986016020526040902080546001600160a01b0319166001600160a01b03841617905590915061354b9086908390613c7f565b61355a85612fc187600161281b565b6001600160a01b03808616600081815260066020526040808220549388168083529120549091907fc1df0cc11cc2a40ae327c4da54a7bc5d5007047ac744e37eed7b461a7811721590613019611458565b6135b5828261374f565b6135f05760405162461bcd60e51b815260040180806020018281038252602181526020018061589b6021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b61361c828261374f565b1561366e576040805162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6003805460ff19169055604080516000815290517fd02d7ece1b390124a8d8d40fc59fc1d6584a261d9a503b71166ec69b3eef00b39181900360200190a1565b8015611968576136eb826001600160a01b031661145a565b6001600160a01b03166108fc829081150290604051600060405180830381858888f19350505050158015613723573d6000803e3d6000fd5b505050565b60008282111561373457fe5b50900390565b60008082848161374657fe5b04949350505050565b60006001600160a01b0382166137965760405162461bcd60e51b81526004018080602001828103825260228152602001806158dc6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b60006137c184611987565b6137cf576127ff6002612bde565b8260ff16600114806137e457508260ff166002145b6137f2576127ff6008612bde565b600e546001600160a01b031661380661145d565b6001600160a01b03161461383f5760ff82166000908152600a602052604090205461382f611458565b101561383f576127ff6004612bde565b60018260ff16118015613860575060035460ff610100909104811690831611155b61386e576127ff6009612bde565b8260ff1660011415613a02576001600160a01b038416600090815260066020908152604080832060ff808716855260079091019092529091205416156138b8576127ff600a612bde565b6001600160a01b038416600090815260066020908152604080832060ff600019870181168552600990910190925290912060020154161561392c576001600160a01b038416600090815260066020908152604080832060ff60001987011684526009019091529020600201805460ff191690555b60006139388584612aa1565b6001600160a01b03868116600090815260066020908152604080832060ff8916845260098101835281842080546001600160a01b031916958716959095179094556007909301905220805460ff191660011790559050613999858285613c7f565b806001600160a01b0316856001600160a01b03167f2ac186f095e215dc3ab153a0ce480c2155b22ace0abd4e26591d4d22b379343c6001866139d9611458565b6040805160ff94851681529290931660208301528183015290519081900360600190a350613b66565b6001600160a01b038416600090815260066020908152604080832060ff80871685526008909101909252909120541615613a40576127ff600a612bde565b6001600160a01b038416600090815260066020908152604080832060ff600019870181168552600a909101909252909120600301541615613ab4576001600160a01b038416600090815260066020908152604080832060ff6000198701168452600a019091529020600301805460ff191690555b6000613ac0858461281b565b6001600160a01b038616600090815260066020908152604080832060ff881684526008019091529020805460ff191660011790559050613b01858285614009565b806001600160a01b0316856001600160a01b03167f2ac186f095e215dc3ab153a0ce480c2155b22ace0abd4e26591d4d22b379343c600286613b41611458565b6040805160ff94851681529290931660208301528183015290519081900360600190a3505b5060009392505050565b6001600160a01b038116613bb55760405162461bcd60e51b81526004018080602001828103825260268152602001806158756026913960400191505060405180910390fd5b6001546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600180546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b6003805460ff1916600117908190556040805160ff929092168252517fd02d7ece1b390124a8d8d40fc59fc1d6584a261d9a503b71166ec69b3eef00b39181900360200190a1565b3b63ffffffff16151590565b60008282018381101561281457fe5b6001600160a01b03828116600090815260066020908152604080832060ff8616808552600990910183529083206001908101805491820181558085529284200180546001600160a01b031916948816949094179093559190525460031115613d5b576001600160a01b03808316600081815260066020908152604080832060ff80881680865260099092018452938290206001908101548351918252938101919091529190921681830152905191928616916000805160206158558339815191529181900360600190a3613d5682846001846149ea565b613723565b604080516001815260ff8316602082015260038183015290516001600160a01b0380851692908616916000805160206158558339815191529181900360600190a360408051600080825260208083018085526001600160a01b03871683526006825284832060ff871684526009019091529290209051613de192600190920191906157b5565b506001600160a01b038216600090815260066020908152604080832060ff600186018116855260079091019092529091205416158015613e2e575060035460ff8281166101009092041614155b15613e6b576001600160a01b038216600090815260066020908152604080832060ff851684526009019091529020600201805460ff191660011790555b600d546001600160a01b03838116911614613f7c576000613e8c8383612aa1565b6001600160a01b03848116600090815260066020908152604080832060ff88168452600901909152902054919250828116911614613f04576001600160a01b03838116600090815260066020908152604080832060ff87168452600901909152902080546001600160a01b0319169183169190911790555b6001600160a01b03808416600081815260066020908152604080832060ff88168085526009909101835292819020600301805460019081019091558151908152918201929092528151888516948616939260008051602061593e833981519152928290030190a4613f76838284613c7f565b50613723565b600d54613f95906001600160a01b0316846001846149ea565b600d80546001600160a01b03908116600090815260066020908152604080832060ff8716808552600990910183528184206003018054600190810190915595548251968752928601528051888516959394929092169260008051602061593e833981519152929081900390910190a4505050565b6001600160a01b038216600090815260066020908152604080832060ff808616855260089091019092529091205416614089576040805162461bcd60e51b815260206004820152601f60248201527f3530302e205265666572726572206c6576656c20697320696e61637469766500604482015290519081900360640190fd5b6001600160a01b038216600090815260066020908152604080832060ff85168452600a0190915290206001015460021115614604576001600160a01b03828116600081815260066020908152604080832060ff878116808652600a909201845282852060019081018054918201815580875285872090910180546001600160a01b031916988c16988917905594829052935482516002815293840191909152909216818301529051919291600080516020615855833981519152916060908290030190a36001600160a01b03838116600090815260066020908152604080832060ff86168452600a01909152902080546001600160a01b031916848316908117909155600d5490911614156141a557613d5682846002846149ea565b6001600160a01b03828116600090815260066020818152604080842060ff8716808652600a91820184528286205487168087529484528286208187529091018352908420600280820180546001808201835591885294872090940180546001600160a01b031916978b169790971790965593529091015490918114801561427a57506001600160a01b03828116600090815260066020908152604080832060ff88168452600a01909152812060010180549287169290919061426357fe5b6000918252602090912001546001600160a01b0316145b80156142d857506001600160a01b03828116600090815260066020908152604080832060ff88168452600a019091529020600190810180549287169290919081106142c157fe5b6000918252602090912001546001600160a01b0316145b1561439f576001600160a01b038416600090815260066020908152604080832060ff87168452600a019091529020600190810154141561435857604080516002815260ff8516602082015260058183015290516001600160a01b0380851692908816916000805160206158558339815191529181900360600190a361439a565b604080516002815260ff8516602082015260068183015290516001600160a01b0380851692908816916000805160206158558339815191529181900360600190a35b6145f2565b80600114806143ae5750806002145b801561440857506001600160a01b03828116600090815260066020908152604080832060ff88168452600a0190915281206001018054928716929091906143f157fe5b6000918252602090912001546001600160a01b0316145b156144ce576001600160a01b038416600090815260066020908152604080832060ff87168452600a019091529020600190810154141561448857604080516002815260ff8516602082015260038183015290516001600160a01b0380851692908816916000805160206158558339815191529181900360600190a361439a565b604080516002815260ff8516602082015260048183015290516001600160a01b0380851692908816916000805160206158558339815191529181900360600190a36145f2565b80600214801561453057506001600160a01b03828116600090815260066020908152604080832060ff88168452600a0190915290206001908101805492871692909190811061451957fe5b6000918252602090912001546001600160a01b0316145b156145f2576001600160a01b038416600090815260066020908152604080832060ff87168452600a01909152902060019081015414156145b057604080516002815260ff8516602082015260058183015290516001600160a01b0380851692908816916000805160206158558339815191529181900360600190a36145f2565b604080516002815260ff8516602082015260068183015290516001600160a01b0380851692908816916000805160206158558339815191529181900360600190a35b6145fd858385614b18565b5050613723565b6001600160a01b03828116600090815260066020908152604080832060ff8616808552600a909101835290832060028101805460018101825590855292842090920180546001600160a01b0319168886161790559091526005015416156147f1576001600160a01b038216600090815260066020908152604080832060ff85168452600a0190915290206001908101805490919081106146a057fe5b60009182526020808320909101546001600160a01b03858116845260068352604080852060ff87168652600a019093529183206001018054929091169290916146e557fe5b6000918252602090912001546001600160a01b031614801561475c57506001600160a01b03828116600090815260066020908152604080832060ff86168452600a0190915281206005810154600190910180549190931692919061474557fe5b6000918252602090912001546001600160a01b0316145b156147795761476e8383836001614f7d565b613d56838383614b18565b6001600160a01b03828116600090815260066020908152604080832060ff86168452600a019091528120600581015460019091018054919093169291906147bc57fe5b6000918252602090912001546001600160a01b031614156147e45761476e8383836001614f7d565b61476e8383836000614f7d565b6001600160a01b03828116600090815260066020908152604080832060ff86168452600a0190915290206001908101805492861692909190811061483157fe5b6000918252602090912001546001600160a01b031614156148595761476e8383836000614f7d565b6001600160a01b03828116600090815260066020908152604080832060ff86168452600a01909152812060010180549286169290919061489557fe5b6000918252602090912001546001600160a01b031614156148bd5761476e8383836001614f7d565b6001600160a01b038216600090815260066020818152604080842060ff86168552600a0190915282206001908101805492939290919081106148fb57fe5b60009182526020808320909101546001600160a01b039081168452838201949094526040928301822060ff8616808452600a918201835284842060019081015496891685526006808552868620928652919092019092529282209092018054829061496257fe5b60009182526020808320909101546001600160a01b03168352828101939093526040918201812060ff86168252600a01909252902060010154116149b2576149ad8383836000614f7d565b6149bf565b6149bf8383836001614f7d565b613723838383614b18565b60008282028315806149e45750828482816149e157fe5b04145b61281457fe5b600e546001600160a01b03166149fe61145d565b6001600160a01b031614614b1257600080614a1b868686866154f9565b60ff85166000908152600a60209081526040808320546001600160a01b038616845260069283905292209081015493955091935091614a60908363ffffffff613c7016565b60068201556040516001600160a01b0385169083156108fc029084906000818181858888f19350505050614aa157614a9884476136d3565b50505050614b12565b600554614ab4908363ffffffff61372816565b6005558215614b0d576040805160ff80891682528716602082015281516001600160a01b0380881693908b16927ff0ddc65c0d411f042f723dcfa1b7d13e85a35b7b70761d447c6500411cacf328929081900390910190a35b505050505b50505050565b6001600160a01b038216600090815260066020908152604080832060ff85168452600a0190915290206002015460041115614b5a57613d5682846002846149ea565b6001600160a01b03808316600090815260066020818152604080842060ff8716808652600a918201845282862054909616855292825280842094845293909101815290829020600101805483518184028101840190945280845260609392830182828015614bf157602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311614bd3575b50505050509050805160021415614d5257826001600160a01b031681600081518110614c1957fe5b60200260200101516001600160a01b03161480614c5b5750826001600160a01b031681600181518110614c4857fe5b60200260200101516001600160a01b0316145b15614cbf576001600160a01b03808416600081815260066020818152604080842060ff8916808652600a91820184528286205490971685529282528084209584529490910190529190912060050180546001600160a01b0319169091179055614d52565b805160011415614d5257826001600160a01b031681600081518110614ce057fe5b60200260200101516001600160a01b03161415614d52576001600160a01b03808416600081815260066020818152604080842060ff8916808652600a91820184528286205490971685529282528084209584529490910190529190912060050180546001600160a01b03191690911790555b60408051600080825260208083018085526001600160a01b03881683526006825284832060ff88168452600a019091529290209051614d9792600190920191906157b5565b5060408051600080825260208083018085526001600160a01b03881683526006825284832060ff88168452600a019091529290209051614ddd92600290920191906157b5565b506001600160a01b038316600090815260066020908152604080832060ff8087168552600a8201845282852060050180546001600160a01b0319169055600187018116855260089091019092529091205416158015614e49575060035460ff8381166101009092041614155b15614e86576001600160a01b038316600090815260066020908152604080832060ff86168452600a019091529020600301805460ff191660011790555b6001600160a01b03808416600081815260066020908152604080832060ff88168452600a01909152902060040180546001019055600d5490911614614f23576000614ed1848461281b565b604080516002815260ff8616602082015281519293506001600160a01b0380891693818616939189169260008051602061593e83398151915292908290030190a4614f1d848285614009565b50614b12565b600d54604080516002815260ff8516602082015281516001600160a01b038089169460009491169260008051602061593e833981519152929081900390910190a4600d54614b12906001600160a01b0316856002856149ea565b80615234576001600160a01b038316600090815260066020818152604080842060ff87168552600a01909152822060010180549192918290614fbb57fe5b6000918252602080832091909101546001600160a01b039081168452838201949094526040928301822060ff8716808452600a91820183528484206001908101805480830182559086528486200180546001600160a01b0319168c8916179055958916845260068352848420908452019052908120909101805490919061503e57fe5b60009182526020808320909101546001600160a01b0386811684526006808452604080862060ff89168752600a01909452928420600101805492821694918916936000805160206158558339815191529360029389939091829061509e57fe5b60009182526020808320909101546001600160a01b03168352828101939093526040918201812060ff808c168352600a909101845290829020600101548251958216865293811692850192909252911682820152519081900360600190a36001600160a01b03808416600081815260066020818152604080842060ff89168552600a019091528220600101805493948916936000805160206158558339815191529360029389939092829061514f57fe5b60009182526020808320909101546001600160a01b03168352828101939093526040918201812060ff808c168352600a90910184529082902060010154825195821686529381169285019290925260029092011682820152519081900360600190a36001600160a01b038316600090815260066020908152604080832060ff86168452600a01909152812060010180549091906151e857fe5b60009182526020808320909101546001600160a01b03878116845260068352604080852060ff88168652600a019093529190922080546001600160a01b03191691909216179055614b12565b6001600160a01b038316600090815260066020818152604080842060ff87168552600a01909152822060019081018054929392909190811061527257fe5b6000918252602080832091909101546001600160a01b039081168452838201949094526040928301822060ff8716808452600a91820183528484206001908101805480830182559086528486200180546001600160a01b0319168c8916179055958916845260068352848420908452019052208101805490919081106152f457fe5b60009182526020808320909101546001600160a01b0386811684526006808452604080862060ff89168752600a019094529284206001908101805493831695928a1694600080516020615855833981519152946002948a94929390929091811061535a57fe5b60009182526020808320909101546001600160a01b03168352828101939093526040918201812060ff808c168352600a909101845290829020600101548251958216865293811692850192909252911682820152519081900360600190a36001600160a01b03808416600081815260066020818152604080842060ff89168552600a0190915282206001908101805494958a1694600080516020615855833981519152946002948a9490939192811061540f57fe5b60009182526020808320909101546001600160a01b03168352828101939093526040918201812060ff808c168352600a90910184529082902060010154825195821686529381169285019290925260049092011682820152519081900360600190a36001600160a01b038316600090815260066020908152604080832060ff86168452600a0190915290206001908101805490919081106154ac57fe5b60009182526020808320909101546001600160a01b03878116845260068352604080852060ff88168652600a019093529190922080546001600160a01b0319169190921617905550505050565b6000808581600160ff871614156155d3575b6001600160a01b038216600090815260066020908152604080832060ff808a16855260099091019092529091206002015416156155c457604080516001815260ff8716602082015281516001600160a01b03808b1693908616927ffc0cb63f8dbd6b20ceb84a3c5358a41576a1479e6ecd040b4b985525dc09a709929081900390910190a3506001600160a01b03908116600090815260066020908152604080832060ff881684526009019091529020541660016155ce565b909250905061568c565b61550b565b6001600160a01b038216600090815260066020908152604080832060ff808a168552600a9091019092529091206003015416156155c457604080516002815260ff8716602082015281516001600160a01b03808b1693908616927ffc0cb63f8dbd6b20ceb84a3c5358a41576a1479e6ecd040b4b985525dc09a709929081900390910190a3506001600160a01b03908116600090815260066020908152604080832060ff88168452600a019091529020541660016155d3565b94509492505050565b604051806101800160405280600c906020820280388339509192915050565b6040518061010001604052806008906020820280388339509192915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061571457805160ff1916838001178555615741565b82800160010185558215615741579182015b82811115615741578251825591602001919060010190615726565b5061574d929150615816565b5090565b60405180608001604052806004906020820280388339509192915050565b6040518060e0016040528060008152602001606081526020016060815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b82805482825590600052602060002090810192821561580a579160200282015b8281111561580a57825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906157d5565b5061574d929150615830565b61145a91905b8082111561574d576000815560010161581c565b61145a91905b8082111561574d5780546001600160a01b031916815560010161583656fe68062c5925c4317adf3a7095478d28b33fd8b41458bc7620b61bc46bf1b24d824f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572526f6c65733a206163636f756e7420697320746865207a65726f206164647265737357686974656c69737441646d696e526f6c653a2063616c6c657220646f6573206e6f742068617665207468652057686974656c69737441646d696e20726f6c65a00c953eff38ec1b71e7fe060b2ab8df0bbe5354319fbdde4fbdafd6324386a6a265627a7a72315820cf20b3adb6d5c404c04af03dc4a977209d4a837e3ac2dbfa6062413bcc7bc40f64736f6c63430005100032";
TRC975.contractName = "TRC975";
