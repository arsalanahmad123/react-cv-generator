import React from "react";
const Template = () => {
  return (
    <div className="container px-40">
      <div className=" bg-slate-200 p-5">
        <section className="">
          <h1 className="font-bold text-2xl">Jill Morgan</h1>
          <p>Sales Reprsentative</p>
        </section>
        <section className="">
          <section className="flex justify-between w-3/4 leading-7">
            <label htmlFor="phone">
              <span className="font-bold">Phone</span> 2125550104
            </label>{" "}
            <br />
            <label htmlFor="phone">
              <span className="font-bold">LinkedIn</span>{" "}
              LinkedIn.com/in/jil/morgenzety
            </label>
          </section>
          <div htmlFor="Email" className="mb-4">
            <span className="font-bold">Email</span> jil.morgan@zety.com
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto
            nihil itaque, repellat nesciunt inventore non aperiam rem.
            Exercitationem ab tempore odio praesentium! Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Laudantium voluptatum obcaecati
            debitis. Voluptates hic culpa deleniti veritatis tenetur quos rerum
            aut alias doloribus.
          </p>
        </section>
        <section>
          <h1 className="font-bold  text-2xl mb-4">Experience</h1>
          <section className="flex">
            <section className="pr-5">2018-2019-present</section>
            <section>
              <h1 className="font-bold mb-4">Customer Relationship Officer</h1>
              <p className="font-italic">
                Mc Kinsey Industrial Supplies, Brooklyn , NY
              </p>
              <ul>
                <li>
                  Managed organizational sales and group of sales
                  representatives in selling industrial equipment and maintining
                  large construction and contractor bussiness relationships.
                </li>
                <li>
                  Worked with the data analysis team to develop sales targets
                  based on extensive market research and analysis.
                </li>
                <li>
                  Tracked individual sales rep sales goals and individually
                  metored any representative deemed to be failing behind
                </li>
                <li>
                  Managed largest 5 corporate construction and industrial client
                  accounts.{" "}
                </li>
              </ul>
              <h1 className="font-bold">Key Achivement</h1>
              <p>
                Achived over $50000 in sales in each fiscal quarter from 2015,
              </p>
            </section>
          </section>
          <section className="flex ">
            <section className="pr-7">2016-09-2018-08</section>
            <section>
              <h1 className="font-bold">Senior Sales Representative</h1>
              <p className="font-italic">
                Mc Kinsey Industrial Supplies, Brooklyn , NY
              </p>
              <ul>
                <li>
                  Managed organizational sales and group of sales
                  representatives in selling industrial equipment and maintining
                  large construction and contractor bussiness relationships.
                </li>
                <li>
                  Worked with the data analysis team to develop sales targets
                  based on extensive market research and analysis.
                </li>
                <li>
                  Tracked individual sales rep sales goals and individually
                  metored any representative deemed to be failing behind
                </li>
                <li>
                  Managed largest 5 corporate construction and industrial client
                  accounts.{" "}
                </li>
              </ul>
              <h1 className="font-bold">Key Achivement</h1>
              <p>
                Achived over $50000 in sales in each fiscal quarter from 2015,
              </p>
            </section>
          </section>
          <section className="flex ">
            <section className="pr-7">
              <span>2014-07-2016-06</span>
            </section>
            <section>
              <h1 className="font-bold">Part Time Retail Associate</h1>
              <p className="font-italic">ABC shopping,Phladelphia,PA</p>
              <ul>
                <li>
                  Managed organizational sales and group of sales
                  representatives in selling industrial equipment and maintining
                  large construction and contractor bussiness relationships.
                </li>
                <li>
                  Worked with the data analysis team to develop sales targets
                  based on extensive market research and analysis.
                </li>
                <li>
                  Tracked individual sales rep sales goals and individually
                  metored any representative deemed to be failing behind
                </li>
                <li>
                  Managed largest 5 corporate construction and industrial client
                  accounts.{" "}
                </li>
              </ul>
              <h1 className="font-bold">Key Achivement</h1>
              <p>
                Achived over $50000 in sales in each fiscal quarter from 2015,
              </p>
            </section>
          </section>

          <h1 className="font-bold text-2xl">Skills</h1>
          <section className="w-99 ml-32">
            <div className="flex justify-between items-center">
              <div>Lead Qualification & Prospecting</div>
              <div className="flex justify-between items-center border bg-slate-300  h-4 w-48">
                <div className="bg-slate-600 h-4 w-28 border "></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>Salesforce and Hubspot CRM</div>
              <div className="flex justify-between items-center border bg-slate-300  h-4 w-48">
                <div className="bg-slate-600 h-4 w-28 border "></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>Optimizing MMR</div>
              <div className="flex justify-between items-center border bg-slate-300  h-4 w-48">
                <div className="bg-slate-600 h-4 w-28 border "></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>Contract Negotiation</div>
              <div className="flex justify-between items-center border bg-slate-300  h-4 w-48">
                <div className="bg-slate-600 h-4 w-28 border "></div>
              </div>
            </div>
          </section>
          <h1 className="text-2xl font-bold ">Languages</h1>
          <section className="w-99 ml-32 ">
            <div className="flex justify-between items-center">
              <div>Spanish</div>
              <div className="flex justify-between items-center border bg-slate-300  h-4 w-48">
                <div className="bg-slate-600 h-4 w-28 sm:w-12 border "></div>
                <p className="mt-14 w-24 ">C1 Certified</p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Template;
