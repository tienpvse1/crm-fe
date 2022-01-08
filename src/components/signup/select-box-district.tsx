import { Cascader } from 'antd';

export const SelectBoxDistrict = () => {
    const district = [
        {
            value: '1',
            label: 'Quận 1',
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
            value: '2',
            label: 'Quận 2',
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
            <Cascader placeholder="Quận/Huyện" options={district} />
        </>
    )
}
