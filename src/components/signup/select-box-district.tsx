import { Cascader } from 'antd';

export const SelectBoxDistrict = () => {

    const childrenDistrict = [];

    for (let index = 1; index < 13; index++) {
        childrenDistrict.push({
            value: index,
            label: `Quận ${index}`
        });
    }

    const district = [
        {
            value: 'district',
            label: 'Quận số',
            children: childrenDistrict
        },
        {
            value: 'district2',
            label: 'Quận chữ',
            children: [
                {
                    value: '13',
                    label: 'Quận Bình Tân'
                },
                {
                    value: '14',
                    label: 'Quận Bình Thạnh'
                },
                {
                    value: '15',
                    label: 'Quận Gò Vấp'
                },
                {
                    value: '16',
                    label: 'Quận Phú Nhuận'
                },
                {
                    value: '17',
                    label: 'Quận Tân Bình'
                },
                {
                    value: '18',
                    label: 'Quận Tân Phú'
                },
                {
                    value: '19',
                    label: 'Huyện Bình Chánh'
                },
                {
                    value: '20',
                    label: 'Huyện Cần Giờ'
                },
                {
                    value: '21',
                    label: 'Huyện Củ Chi'
                },
                {
                    value: '22',
                    label: 'Huyện Hóc Môn'
                },
                {
                    value: '23',
                    label: 'Huyện Nhà Bè'
                }
            ]
        }
    ];

    return (
        <>
            <Cascader placeholder="Quận/Huyện" options={district} />
        </>
    )
}
