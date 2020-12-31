import React from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import styles from './index.module.scss'

// type PageStateProps = {
//   store: {
//     counterStore: {
//       counter: number,
//       increment: Function,
//       decrement: Function,
//       incrementAsync: Function
//     }
//   }
// }

// interface Index {
//   props: PageStateProps;
// }

const Index = ({ counterStore }) => {
  const { counter, increment, decrement, incrementAsync } = counterStore

  return (
    <View className={styles.IndexWrap}>
      <Button onClick={increment} className={styles.btnClazz}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={incrementAsync}>Add Async</Button>
      <Text>{counter}</Text>
    </View>
  )
}

export default inject('counterStore')(observer(Index))