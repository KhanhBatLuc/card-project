import { createSelector } from "@reduxjs/toolkit";
// colorSlice
export const listcolorSelector = (state) => state.color.listColor;
export const coloractiveSelector = (state) => state.color.colorActive;

// cardSlice
export const listInfoGlobalSelector = (state) => state.cards.listCardGlobal;
export const listInfoCardsId = (state) => state.cards.listInfomationCard;
