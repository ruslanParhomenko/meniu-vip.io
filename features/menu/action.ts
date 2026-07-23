// GET

import { unstable_cache } from "next/cache";
import { DATA_MENU_ACTION_TAG } from "../../constants/action-tag";
import { dbAdmin } from "../../lib/firebase-admin";
import { MenuDataType } from "./types";

const actionTag = DATA_MENU_ACTION_TAG;

export async function _getDataMenu() {
  const docRef = dbAdmin.collection(actionTag).doc(actionTag);

  const snap = await docRef.get();

  if (!snap.exists) return null;

  return snap.data() as MenuDataType;
}

export const getDataMenu = unstable_cache(_getDataMenu, [actionTag], {
  revalidate: false,
  tags: [actionTag],
});
