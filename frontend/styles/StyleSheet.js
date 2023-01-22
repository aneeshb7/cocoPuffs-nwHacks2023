import { StyleSheet } from 'react-native';


export default StyleSheet.create ({

  listContainer: {
    flex: 1,
    paddingTop: 22,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  distance: {
    paddingTop: 10,
  },
  soberDaysTracker: {
    fontSize: 30,
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'space-evenly',
    paddingTop: 150
  },
  milestonesTracker: {
    fontSize: 30,
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'space-evenly',
    paddingBottom: 150
  },
  subtext: {
    fontSize: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    paddingBottom: 3
  }
})
