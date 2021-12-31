import { createSlice } from '@reduxjs/toolkit';
import { Icon } from '@iconify/react';

const removeNumber = (arr, num) => arr.filter((el) => el.id !== num);

export default createSlice({
  name: 'card',
  initialState: {
    listCardGlobal: [
      {
        id: 1,
        icon: <Icon icon="mdi:phone" style={{ fontSize: '24px' }} />,
        defaultValue: 'khanh',
        placeholder: 'Sdt',
        title: 'Phone'
      },
      {
        id: 2,
        icon: <Icon icon="mdi:email-outline" style={{ fontSize: '24px' }} />,
        defaultValue: '',
        placeholder: 'Email',
        title: 'Email'
      },
      {
        id: 3,
        icon: <Icon icon="mdi:web" style={{ fontSize: '24px' }} />,
        defaultValue: '',
        placeholder: 'www.hihello.me',
        title: 'Website'
      },
      {
        id: 4,
        icon: <Icon icon="mdi:domain" style={{ fontSize: '24px' }} />,
        defaultValue: '',
        placeholder: 'name company',
        title: 'Company'
      },

      {
        id: 5,
        icon: <Icon icon="mdi:link-plus" style={{ fontSize: '24px' }} />,
        defaultValue: '',
        placeholder: 'www.hihello.me',
        title: 'Link'
      },
      {
        id: 6,
        icon: <Icon icon="mdi:file-pdf-box" style={{ fontSize: '24px' }} />,
        defaultValue: '',
        placeholder: 'link pdf',
        title: 'PDF'
      },
      {
        id: 7,
        icon: <Icon icon="mdi:twitter" style={{ fontSize: '24px' }} />,
        defaultValue: '@',
        placeholder: '',
        title: 'Twitter'
      },
      {
        id: 8,
        icon: <Icon icon="mdi:instagram" style={{ fontSize: '24px' }} />,
        defaultValue: '@',
        placeholder: '',
        title: 'Instagram'
      },
      {
        id: 9,
        icon: <Icon icon="mdi:linkedin" style={{ fontSize: '24px' }} />,
        defaultValue: 'linkedin.com/in/',
        placeholder: '',
        title: 'LinkedIn'
      },
      {
        id: 10,
        icon: <Icon icon="mdi:facebook" style={{ fontSize: '24px' }} />,
        defaultValue: 'facebook.com/',
        placeholder: '',
        title: 'FaceBook'
      },
      {
        id: 11,
        icon: <Icon icon="mdi:youtube" style={{ fontSize: '24px' }} />,
        defaultValue: 'https://youtu.be/',
        placeholder: '',
        title: 'Youtube'
      },
      {
        id: 12,
        icon: <Icon icon="mdi:whatsapp" style={{ fontSize: '24px' }} />,
        defaultValue: '',
        placeholder: '042563589712',
        title: 'WhatsApp'
      },
      {
        id: 13,
        icon: <Icon icon="mdi:github" style={{ fontSize: '24px' }} />,
        defaultValue: '',
        placeholder: 'username',
        title: 'GitHub'
      },
      {
        id: 14,
        icon: <Icon icon="mdi:calendar-blank" style={{ fontSize: '24px' }} />,
        defaultValue: 'calendly.com/',
        placeholder: '',
        title: 'Calendar'
      },
      {
        id: 15,
        icon: <Icon icon="mdi:note-edit-outline" style={{ fontSize: '24px' }} />,
        defaultValue: 'Note',
        placeholder: '',
        title: 'Notes'
      }
    ],
    listInfomationCard: []
  },
  reducers: {
    addInfomation: (state, action) => {
      const check = state.listInfomationCard.some((obj) => obj.id === action.payload.id);
      if (!check) {
        state.listInfomationCard.push(action.payload);
      }
    },
    removeInfomation: (state, action) => {
      state.listInfomationCard = removeNumber(state.listInfomationCard, action.payload);
    },
    dropInfomation: (state, action) => {
      state.listInfomationCard = action.payload;
    }
  }
});
