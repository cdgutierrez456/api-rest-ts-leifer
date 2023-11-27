import { Router } from "express";

import { logMiddleware } from "../middleware/log";

import { getItem, getItems, postItem, deleteItem, updateItems } from "../controllers/item";

const router = Router()

router.get('/', getItems)

router.get('/:id', logMiddleware, getItem)

router.post('/', postItem)

router.put('/:id', updateItems)

router.delete('/:id', deleteItem)

export { router };
