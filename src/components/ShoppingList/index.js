/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

// Icons
import {
  FiTrash,
} from 'react-icons/fi';

// Components
import SliderCheckbox from 'src/containers/SliderCheckbox';

// Validation props
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './styles.scss';

// Yup validation schema
const shoppingItemSchema = yup.object().shape({
  // eslint-disable-next-line newline-per-chained-call
  shopItemName: yup.string().required().typeError("Le nom de l'organisation doit contenir entre 3 et 30 caractères alphanumériques").min(3).max(30),
});

const ShoppingComponent = ({
  orgaId,
  orgShoppingList,
  deleteItemShopList,
  createItemShopList,
  setErrMessage,
}) => {
  // RHF controlled components
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(shoppingItemSchema),
  });

  // Handle Form Errors
  useEffect(() => {
    if (errors.shopItemName) setErrMessage(errors.shopItemName.message);
  }, [errors]);

  const handleCreateShopItem = (data) => {
    createItemShopList(data, orgaId);
  };

  return (
    <div className="shoppingComponent">
      <h1 className="shoppingComponent-title">Shopping List</h1>
      {/* Form */}
      <form onSubmit={handleSubmit(handleCreateShopItem)} className="shoppingComponent-form">
        <input {...register('shopItemName')} type="text" name="shopItemName" className="shoppingComponent-form--input" placeholder="Ajouter un élément" />
        <input type="submit" value="+" className="shoppingComponent-form--btn" />
      </form>

      {/* List */}
      <ul className="shoppingComponent-list">
        {orgShoppingList && orgShoppingList.map((shopItem) => (

          <li key={shopItem._id} className="shoppingComponent-list--item">
            <div className={shopItem.isShopItemSelected ? 'shoppingComponent-list--item_card-selected' : 'shoppingComponent-list--item_card'}>
              <div className="shoppingComponent-list--item_card-title">
                <p>{shopItem.shopItemName}</p>
                {/* FAVORITES TODO LATER */}
                {/* <FiStar className="shoppingComponent-list--item_card-icon--star" /> */}
              </div>
              <SliderCheckbox itemId={shopItem._id} isItemSelected={shopItem.isShopItemSelected} />
              <FiTrash className="shoppingComponent-list--item_card-icon--trash" color="#dc143c" size="25px" strokeWidth="2.5px" onClick={() => deleteItemShopList(shopItem._id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ShoppingComponent.propTypes = {
  orgaId: PropTypes.string.isRequired,
  orgShoppingList: PropTypes.array,
  deleteItemShopList: PropTypes.func.isRequired,
  createItemShopList: PropTypes.func.isRequired,
  setErrMessage: PropTypes.func.isRequired,
};

ShoppingComponent.defaultProps = {
  orgShoppingList: [],
};

export default ShoppingComponent;
