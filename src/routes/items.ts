import { Router } from "express";
import { getItem, getItems, postItem, deleteItem, updateItems } from "../controllers/item";

const router = Router()

router.get('/', getItems)

router.get('/:id', getItem)

router.post('/', postItem)

router.put('/:id', updateItems)

router.delete('/:id', deleteItem)

export { router };
