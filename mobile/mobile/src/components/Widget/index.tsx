
import React, { useMemo, useRef,useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { ChatTeardropDots } from 'phosphor-react-native'
import BottomSheet from '@gorhom/bottom-sheet';


import { styles } from './styles';
import { theme } from '../../theme';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { Form } from '../Form'
import { Sucess } from '../Sucess'
import { Options } from '../Options';
import { feedbackTypes } from '../../utils/feedbackTypes';

export type FeedbackType = keyof typeof feedbackTypes;


function Widget() {
  const[feedbackType,setFeedbackType]=useState<FeedbackType|null>(null);
  const[feedbackSent,setFeedbackSent]=useState(false)
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [1, 300], []);

  function handleOpen() {
    bottomSheetRef.current?.expand()
  }

  function handleRestartFeedback(){
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent(){
    setFeedbackSent(true);
  }

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOpen}
      >
    
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {
          feedbackSent?
          <Sucess onSendAnotherFeedback={handleRestartFeedback}/>
          :
          <>
          {
            feedbackType?
            <Form feedbackType={feedbackType}
                  onFeedbackCanceled={handleRestartFeedback}
                  onFeedbackSent={handleFeedbackSent}
            
            />
            :
            <Options onFeedbackTypeChanged={setFeedbackType} />
          }
          </>

        }

        
      </BottomSheet>



    </>
  );
}

export default gestureHandlerRootHOC(Widget);