import { rest } from "msw";

import { mockLoginData as User } from "../pages/Login/mockData";

export const handlers = [
  rest.post(
    `http://localhost:5000/api/v1/auth/register`,
    async (req, res, ctx) => {
      const { email, name, password, pancard } = await req.json();
      if (
        name &&
        email &&
        password &&
        pancard &&
        email !== "bhanum@gmail.com"
      ) {
        return res(
          ctx.status(200),
          ctx.json({
            message: "registartion done",
          })
        );
      } else {
        return res(
          ctx.status(401),
          ctx.json({ message: "Email already exists" })
        );
      }
    }
  ),

  rest.post(
    `http://localhost:5000/api/v1/auth/login`,
    async (req, res, ctx) => {
      const { email, password, pancard } = await req.json();
      if (
        email === User.email &&
        password === User.password &&
        pancard === User.pancard
      ) {
        return res(
          ctx.status(200),
          ctx.json({
            user: "dummy@gmail.com",
            token: "as213@13455()_OIUH$%^&*",
          })
        );
      } else {
        return res(
          ctx.status(401),
          ctx.json({ message: "Invalid Credentials" })
        );
      }
    }
  ),
  rest.get(`http://localhost:5000/api/v1/pancard`, async (req, res, ctx) => {
    const { fixedDepo } = req.url.searchParams;
    if (fixedDepo) {
      return res(ctx.status(200), ctx.json({ data: [] }));
    }
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            name: "Sikha h",
            email: "sikha@gmail.com",
            pancard: "IUYTREWQAS",
            bankName: "Bank3",
            AccountType: "Salary",
            FixedDeposits: 1,
            Balance: 8000,
          },
        ],
      })
    );
  }),
  rest.get(
    `http://localhost:5000/api/v1/pancard/flagged`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          data: [],
        })
      );
    }
  ),
  rest.get(
    `http://localhost:5000/api/v1/pancard/bank`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          data: [
            {
              name: "Jenny",
              email: "Jen123@gmail.com",
              pancard: "REDSBGNJKL",
              bankName: "Bank1",
              AccountType: "Salary",
              FixedDeposits: 7,
              Balance: 30500,
              isFlagged:false,
            },
            {
              name: "Jenny",
              email: "Jen123@gmail.com",
              pancard: "REDSBGNJKL",
              bankName: "Bank1",
              AccountType: "Savings",
              FixedDeposits: 9,
              Balance: 8000,
              isFlagged:false,
            },
          ],
        })
      );
    }
  ),
  rest.post(`http://localhost:5000/api/v1/pancard/create`,async(req,res,ctx)=>{
    const { AccountType, Balance, FixedDeposits } = await req.json();
    if(AccountType && Balance && FixedDeposits){
      return ctx.json({msg:"Account Created"})
    }
  })
];
