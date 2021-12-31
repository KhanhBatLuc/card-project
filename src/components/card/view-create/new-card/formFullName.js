import { Icon } from '@iconify/react';
// material
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
// component
import { MyTextField, MyTextArea, InputInfomation } from './myText';
// redux
import { useSelector, useDispatch } from 'react-redux';
import cardSlice from '../../../../slice/cardSlice';
import { coloractiveSelector, listInfoCardsId } from '../../../../redux/selectors';
// drag dnd-beatifu
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// input name
const InputName = [
  { id: 1, label: 'Prefix' },
  { id: 2, label: 'First name' },
  { id: 3, label: 'Middle name' },
  { id: 4, label: 'Last name' }
];

function FormFullName() {
  const dispatch = useDispatch();
  const currentColor = useSelector(coloractiveSelector);
  const listInfoCard = useSelector(listInfoCardsId);
  const handleRemoveIcon = (idIcon) => {
    dispatch(cardSlice.actions.removeInfomation(idIcon));
  };

  const handleOnDragEnd = (result) => {
    let items = Array.from(listInfoCard);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination?.index, 0, reorderedItem);
    dispatch(cardSlice.actions.dropInfomation(items));
  };

  return (
    <>
      <Accordion sx={{ pt: 1 }}>
        <AccordionSummary
          expandIcon={<Icon icon="mdi:chevron-down" style={{ fontSize: '1rem' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body3">Full name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: '100%', paddingLeft: '1rem' }}>
            {InputName?.map((e) => (
              <MyTextField key={e.id} label={e.label} currentColor={currentColor} />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Box
        sx={{
          backgroundColor: '#ffffff',
          mx: '1rem',
          pt: '1rem',
          mt: '1rem'
        }}
      >
        <MyTextArea label="Title" currentColor={currentColor} />
        <MyTextField label="Department" currentColor={currentColor} />
        <MyTextField label="Company" currentColor={currentColor} />
        <MyTextField label="Headline" currentColor={currentColor} />
      </Box>
      {/* input infomation */}

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <Box
              sx={{
                backgroundColor: '#ffffff',
                mx: '1rem',
                pt: '1rem',
                mb: '2rem'
              }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {listInfoCard?.map((e, index) => (
                <InputInfomation
                  icon={e.icon}
                  defaultValue={e.defaultValue}
                  placeholder={e.placeholder}
                  currentColor={currentColor}
                  id={e.id}
                  onRemove={handleRemoveIcon}
                  title={e.title}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default FormFullName;
