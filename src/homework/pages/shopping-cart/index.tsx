import { tm } from '@/utils/tw-merge';

function ShoppingCart() {
  return (
    <article className={tm('flex space-x-5 justify-center', 'mt-10')}>
      <h2 className="sr-only">쇼핑카트</h2>
      <div>{/* 아이템 리스트 - 아이템 - 수량 */}</div>
    </article>
  );
}

export default ShoppingCart;
