import { Modal } from "antd";
import Button from "./Button";
import type { Item } from "../mockup/item";
import { useEffect, useState, type SetStateAction } from "react";
import { currency } from "../helpers/text";

interface CartModalProps {
  selectedItems: Item[];
  setSelectedItems: React.Dispatch<SetStateAction<Item[]>>;
  showModal: boolean;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

interface CartItem extends Item {
  total: number;
}

export default function CartModal({
  selectedItems,
  showModal,
  setShowModal,
  setSelectedItems
}: CartModalProps) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    function setCartItem() {
      let currentCartItems: CartItem[] = [];

      for (const selectedItem of selectedItems) {
        const listItemName: string[] = currentCartItems.map(item => item.name);
        if (listItemName.includes(selectedItem.name)) {
          const foundItem = currentCartItems.find(item => item.name === selectedItem.name);

          if (foundItem) {
            currentCartItems = [
              ...currentCartItems.filter(item => item.name !== selectedItem.name),
              {
                ...foundItem,
                total: foundItem.total + 1
              }
            ];
          }
        } else {
          currentCartItems.push({
            ...selectedItem,
            total: 1
          });
        }
      }

      setItems(currentCartItems);
    }

    setCartItem();
  }, [selectedItems]);

  useEffect(() => {
    setItems(prev => prev.filter(item => {
      if (item.total > 0) {
        return true;
      }
      setSelectedItems(prev => prev.filter(selectedItem => selectedItem.name !== item.name));
      return false;
    }));
  }, [items]);

  function setTotalItem(cartItem: CartItem, method: 'add' | 'remove') {
    setItems(prev => prev.map(item => {
      return item.name === cartItem.name ? {
        ...item,
        total: method === 'add' ? item.total + 1 : Math.max(item.total - 1, 0)
      } : item
    }));
  }

  function handleSubmit() {
    const phone = '+6283831139680';
    const message = `Halo saya ingin memesan: \n
    ${items.map(item => `${item.name} x ${item.total} = Rp ${currency(item.total * item.price)}\n`).join('')}
    *Total = Rp ${currency(items.reduce((curr, item) => curr + (item.price * item.total), 0))}*
    `;
    const encoded = encodeURIComponent(message);

    setShowModal(false)
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank"); 
  }

  return (
    <Modal
      title="Cart Preview"
      centered
      open={showModal}
      onCancel={() => setShowModal(false)}
      footer={[
        <Button onClick={() => setShowModal(false)} className="mx-3" buttonType="cancel">Cancel</Button>,
        <Button onClick={() => handleSubmit()}>Submit</Button>
      ]}
      width={400}
    >
      <div className="flex flex-col gap-y-6">
        <span className="border border-slate-200 w-full"></span>
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <div className="flex gap-x-4 items-center">
              <img src={item.imgSrc} alt="item" className="size-8 md:size-16" />
              <p className="text-sm md:text-base whitespace-pre-wrap">{item.name}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xs md:text-sm whitespace-pre-wrap">IDR {currency(item.price * item.total)}</p>
              <div className="flex w-full items-center text-xs md:text-sm border border-slate-400 rounded-full">
                <button onClick={() => setTotalItem(item, 'remove')} className="cursor-pointer text-center flex-1">-</button>
                <p className="whitespace-pre-wrap flex-1 text-center border-x border-slate-400">{item.total}</p>
                <button onClick={() => setTotalItem(item, 'add')} className="cursor-pointer text-center flex-1">+</button>
              </div>
            </div>
          </div>
        ))}
        <span className="border border-slate-200 w-full"></span>
        <div className="flex justify-between items-center">
          <p className="text-sm md:text-base font-semibold">Total</p>
          <p className="text-sm md:text-base">IDR {currency(items.reduce((prev, curr) => prev + (curr.price * curr.total), 0))}</p>
        </div>
      </div>
    </Modal>
  )
}