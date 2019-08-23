// This data will act like our backend requests for the interim

// This will represent the user that I am logged in as
export const firstUserData = {
  id: 20,
  display_name: "Prince Wilson",
  email: "prince@flatironschool.com"
}

// WE DON'T WANT THE FULL DATA
// SO REMEMBER THAT WE WOULD NORMALLY JUST USE A SERIALIZER
// TO AVOID THIS
export const fullFirstUserData = {
  ...firstUserData,
  password_digest: 'sfljkasfljasklfjaslfjafjas',
  dob: '1989-03-08'
}


// My feed is composed of posts I have made and what other users have made
export const myTimeline = [
  {
    id: 1,
    content: 'Cool Story',
  },
  {
    id: 2,
    content: 'I love corgis soooo much',
  },
  {
    id: 3,
    content: 'Corgis are the cutest'
  },
  { 
    id: 4,
    content: 'If I had a pet corgi, I would be soooooo happy'
  },
  {
    id: 5,
    content: 'Missy Elliott dropped a new album last night'
  },
  {
    id: 6,
    content: 'It\'s Britney b***h'
  }
]