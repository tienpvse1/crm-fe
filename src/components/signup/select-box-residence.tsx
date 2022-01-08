import { Cascader } from 'antd';

export const SelectBoxResidence = () => {
    const residences = [
        {
            value: 'tphcm',
            label: 'TP.HCM',
            children: [
                {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                    ],
                },
            ],
        },
        {
            value: 'hanoi',
            label: 'Hà Nội',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <>
            <Cascader placeholder="Tỉnh/Thành Phố" options={residences} />
        </>
    )
}
