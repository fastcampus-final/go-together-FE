import { ROUTES } from '@/constants/routes';
import { ICart } from '@/interfaces/cart';
import { formatPeriod, formatPrice } from '@/utils/format';
import { useRouter } from 'next/router';
import React from 'react';
import Image from '../common/Image';

const OrderItem = ({ item }: { item: ICart }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(ROUTES.PRODUCT_BY_ID(item.productId));
  };

  return (
    <div onClick={handleClick}>
      <div>
        <Image
          src={item.productThumbnail}
          alt={item.productName}
          width="120px"
          height="120px"
          borderRadius="10px"
          cursorPointer={true}
        />
      </div>
      <div>
        <div>{item.productName}</div>
        <div>{formatPeriod(item.option.startDate, item.option.endDate)}</div>
        <div>{formatPrice(item.productPrice)}</div>
      </div>
    </div>
  );
};

export default OrderItem;
