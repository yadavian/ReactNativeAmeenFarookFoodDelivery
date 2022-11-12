import { ApiConstant } from "../contants";

const getFlagIcon = (
    code = 'IN',
    style = ApiConstant.COUNTRY_FLAG.STYLE.FLAG,
    size = ApiConstant.COUNTRY_FLAG.SIZE,
) => {
    `${ApiConstant.COUNTRY_FLAG.BASE_URL}/${code}/${style}/${size}`
}

export default { getFlagIcon }