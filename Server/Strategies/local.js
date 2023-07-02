const passport = require("passport");
const { Strategy } = require("passport-local");
const ComparePasswords = require("../Utils/helper");
const {
  CivilUser,
  ITUser,
  ElectronicsUser,
} = require("../Databse/Schemas/User");

const findUserByEmail= async (email) => {
  let user;

  user = await CivilUser.findOne({ email});
  if (user) return user;

  user = await ITUser.findOne({ email});
  if (user) return user;

  user = await ElectronicsUser.findOne({ email});
  if (user) return user;

  return null;
};

const findUserByID= async (id) => {
  let user;

  user = await CivilUser.findById(id);
  if (user) return user;

  user = await ITUser.findById(id);
  if (user) return user;

  user = await ElectronicsUser.findById(id);
  if (user) return user;

  return null;
};


passport.serializeUser((user,done)=>{
    console.log("Serializing User..")
    console.log(user)
    done(null,user.id)
});

passport.deserializeUser(async(id,done)=>{
    console.log("Deserializing User.. ");
    console.log(id);
    try {
        const user = await findUserByID(id)
        if(!user) throw new error("User Not Found");
        console.log(user)
        done(null,user)
    } catch (error) {
        console.log(error);
        done(error,null)
    }

})



passport.use(
  new Strategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      console.log(email);
      console.log(password);

      try {
        if (!email || !password) {
          throw new Error("Missiong Credential");
        }
        const UserDb = await findUserByEmail(email)
        if (!UserDb) {
          throw new Error("User Not Found");
        }
        const isValid = ComparePasswords.ComparePasswords(
          password,
          UserDb.password
        );
        if (isValid) {
          console.log("Aunthenticated");
          done(null, UserDb);
        } else {
          console.log("failed to Authenticate");
          done(null, null);
        }
      } catch (err) {
        done(err, null);
      }
    }
  )
);