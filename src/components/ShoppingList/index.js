import React from 'react';
import { useForm } from 'react-hook-form';

// Icons
import {
  FiStar,
  FiTrash,
} from 'react-icons/fi';

// Components
import SliderCheckbox from 'src/components/Utils/SliderCheckBox';

// Validation props
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './styles.scss';

// Yup validation schema
const shoppingItemSchema = yup.object().shape({
  // eslint-disable-next-line newline-per-chained-call
  shoppingItem: yup.string().required().typeError("Le nom de l'organisation doit contenir entre 3 et 30 caractères alphanumériques").min(3).max(30),
});

const ShoppingComponent = () => {
  // RHF controlled components
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(shoppingItemSchema),
  });

  const handleCreateShopItem = (data) => {
    console.log(data);
  };

  return (
    <div className="shoppingComponent">
      <h1 className="shoppingComponent-title">Shopping List</h1>
      {/* Form */}
      <form onSubmit={handleSubmit(handleCreateShopItem)} className="shoppingComponent-form">
        <input {...register('shoppingItem')} type="text" name="shoppingItem" className="shoppingComponent-form--input" placeholder="Ajouter un élément" />
        <input type="submit" value="+" className="shoppingComponent-form--btn" />
      </form>

      {/* List */}
      <ul className="shoppingComponent-list">
        <li className="shoppingComponent-list--item">
          <div className="shoppingComponent-list--item_card">
            <div className="shoppingComponent-list--item_card-title">
              <p>Salade</p>
              <FiStar className="shoppingComponent-list--item_card-icon--star" />
            </div>
            <SliderCheckbox />
            <FiTrash className="shoppingComponent-list--item_card-icon--trash" />
          </div>
        </li>
        <li className="shoppingComponent-list--item">
          <div className="shoppingComponent-list--item_card">
            <div className="shoppingComponent-list--item_card-title">
              <p>tomate</p>
              <FiStar className="shoppingComponent-list--item_card-icon--star" />
            </div>
            <SliderCheckbox />
            <FiTrash className="shoppingComponent-list--item_card-icon--trash" />
          </div>
        </li>
        <li className="shoppingComponent-list--item">
          <div className="shoppingComponent-list--item_card">
            <div className="shoppingComponent-list--item_card-title">
              <p>Oignon</p>
              <FiStar className="shoppingComponent-list--item_card-icon--star" />
            </div>
            <SliderCheckbox />
            <FiTrash className="shoppingComponent-list--item_card-icon--trash" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ShoppingComponent;
