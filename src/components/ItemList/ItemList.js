import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import PropTypes from 'prop-types'

const ItemList = ({ items, onClickDone, onClickDelete, onClickFilter }) => (<ul className={styles.wrap}>
	{items.map(item => <li className={styles.mark} key={item.id}>
		<Item
			value={item.value}
			isDone={item.isDone}
			id={item.id}
			onClickDone={onClickDone}
			onClickDelete={onClickDelete}
			onClickFilter={onClickFilter}
		/>
	</li>)}
</ul>);

Item.propTypes = {
	items: PropTypes.array,
	onClickDone: PropTypes.func.isRequired,
	onClickDelete: PropTypes.func.isRequired
}

export default ItemList;