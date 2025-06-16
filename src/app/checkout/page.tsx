// CheckoutPage
import { useState, useEffect } from "react";
import Link from 'next/link';
import { ProductItem } from "@/types/Product";

interface CheckoutItem {
  product: ProductItem;
  quantity: number;
}
//  과제 3
export default function CheckoutPage() {
  const [items, setItems] = useState<CheckoutItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  // 3.1. 결제하기 구현

  useEffect(() => {
    const storedItemsJSON = localStorage.getItem('checkoutItems');

    if (storedItemsJSON) {
      const parsedItems: CheckoutItem[] = JSON.parse(storedItemsJSON);
      setItems(parsedItems);

      const total = parsedItems.reduce((sum, item) => {
        return sum + (Number(item.product.lprice) * item.quantity);
      }, 0);
      setTotalPrice(total);

      localStorage.removeItem('checkoutItems');
    }
  }, []);
  
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-4">✅ 결제가 완료되었습니다!</h1>
      {/* 3.1. 결제하기 구현 */}
      {items.length === 0 ? (
        <p className="text-center text-gray-500 py-4">결제된 아이템이 없습니다.</p>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">결제 내역</h2>
          <ul className="space-y-4 mb-6">
            {items.map((item) => (
              <li key={item.product.productId} className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                <div>
                  <p className="font-semibold" dangerouslySetInnerHTML={{ __html: item.product.title }}></p>
                  <p className="text-sm text-gray-600">
                    {Number(item.product.lprice).toLocaleString()}원 x {item.quantity}개
                  </p>
                </div>
                <p className="font-bold text-lg text-blue-600">
                  {(Number(item.product.lprice) * item.quantity).toLocaleString()}원
                </p>
              </li>
            ))}
          </ul>
          <div className="text-right text-2xl font-bold py-4 border-t">
            <span>총 결제 금액: </span>
            <span className="text-red-500">{totalPrice.toLocaleString()}원</span>
          </div>
        </div>
      )}
      {/* 3.2. 홈으로 가기 버튼 구현 */}
      <div className="mt-8 text-center">
        <Link href="/">
          <button className="px-8 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors">
            홈 화면으로 돌아가기
          </button>
        </Link>
      </div>
    </div>
  );
}
