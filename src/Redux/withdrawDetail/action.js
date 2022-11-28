import { ActionTypes } from "../types";
import { financeAppContractAddress, financeAppContract_Abi } from "../../utilies/Contract";
import Web3 from "web3";
export const withdrawInfo = (acc) => {
    return async (dispatch) => {
        try {
           
            let obj = {}
            const web3 = window.web3;
            let financeAppcontractOf = new web3.eth.Contract(financeAppContract_Abi, financeAppContractAddress)
            let reward_info = await financeAppcontractOf.methods.rewardInfo(acc).call();
            let capitals = web3.utils.fromWei(reward_info.capitals)
            let all_val =  (parseInt(web3.utils.fromWei(reward_info.capitals)) + parseInt(web3.utils.fromWei(reward_info.statics)) + parseInt(web3.utils.fromWei(reward_info.directs)) + parseInt(web3.utils.fromWei(reward_info.level2to5)) + parseInt(web3.utils.fromWei(reward_info.level6to20)) + parseInt(web3.utils.fromWei(reward_info.Platinum)) + parseInt(web3.utils.fromWei(reward_info.Silver)) + parseInt(web3.utils.fromWei(reward_info.Gold)) +parseInt(web3.utils.fromWei(reward_info.top)) +parseInt(web3.utils.fromWei(reward_info.ROIReleasedd)))

            obj['directs'] = Number(web3.utils.fromWei(reward_info.directs)).toFixed(2)
            obj['statics'] = Number(web3.utils.fromWei(reward_info.statics)).toFixed(2)
            obj['capitals'] = Number(web3.utils.fromWei(reward_info.capitals)).toFixed(2)
            obj['ROIReleasedd'] = Number(web3.utils.fromWei(reward_info.ROIReleasedd)).toFixed(2)
            obj['level2to5'] = Number(web3.utils.fromWei(reward_info.level2to5)).toFixed(2)
            obj['level6to20'] = Number(web3.utils.fromWei(reward_info.level6to20)).toFixed(2)
            obj['split'] = Number(web3.utils.fromWei(reward_info.split)).toFixed(2)
            obj['Platinum'] = Number(web3.utils.fromWei(reward_info.Platinum)).toFixed(2)
            obj['Silver'] = Number(web3.utils.fromWei(reward_info.Silver)).toFixed(2)
            obj['Gold'] = Number(web3.utils.fromWei(reward_info.Gold)).toFixed(2)
            obj['top'] = Number(web3.utils.fromWei(reward_info.top)).toFixed(2)
            obj['unlock'] = Number(capitals).toFixed(2)
            obj['totalWithdrawls'] = Number(web3.utils.fromWei(reward_info.totalWithdrawls)).toFixed(2)
            

            dispatch({ type: ActionTypes.WITHDRAW_INFO, payload: obj, payload1:all_val});
            
            
        } catch (e) {
            console.log("error while get detiail",e);
        }
    }

}

