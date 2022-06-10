import React from "react";

import { useNavigate } from "react-router-dom";
import { BarData, BarData1 } from "./chartData.js";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
} from "recharts";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { List } from "components/List";
import { Input } from "components/Input";
import { Grid } from "components/Grid";
import { Line } from "components/Line";
import { RatingBar } from "components/RatingBar";

const CustomerReviewsPage = () => {
  const navigate = useNavigate();

  const handleNavigate15 = () => navigate("/dashboardrestaurant");
  const handleNavigate5 = () => navigate("/menu");
  const handleNavigate6 = () => navigate("/ordersrestaurant");
  const handleNavigate7 = () => navigate("/settingsrestaurant");
  const handleNavigate8 = () => navigate("/");

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-poppins mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[100%]">
          <aside className="bg-white_A700 items-center w-[18%]">
            <Column className="">
              <Column className="items-center justify-start lg:mb-[235px] xl:mb-[269px] 2xl:mb-[303px] 3xl:mb-[363px] mb-[404px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] w-[73%]">
                <Text className="font-bold mx-[auto] text-bluegray_900 lg:text-fs23 xl:text-fs26 2xl:text-fs30 3xl:text-fs36 text-fs40 text-left w-[auto]">
                  <span className="text-bluegray_900 font-poppins">
                    <>{`GoMeal`}</>
                  </span>
                  <span className="text-amber_600 font-poppins">
                    <>{`.`}</>
                  </span>
                </Text>
                <Row
                  className="common-pointer bg-amber_600 items-center justify-start lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] mt-[62px] rounded-radius16 shadow-bs w-[100%]"
                  onClick={handleNavigate15}
                >
                  <Image
                    src={"images/img_restaurantloca_11.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="RestaurantLoca"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[auto]">{`Dashboard`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate5}
                >
                  <Image
                    src={"images/img_bill_11.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Bill"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Menu`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate6}
                >
                  <Image
                    src={"images/img_deliveryscoote_11.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="DeliveryScoote"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Food Order`}</Text>
                </Row>
                <Row className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]">
                  <Image
                    src={"images/img_review_11.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Review"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Reviews`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate7}
                >
                  <Image
                    src={"images/img_setting_11.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Setting"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Setting`}</Text>
                </Row>
                <Stack className="lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] lg:mt-[135px] xl:mt-[154px] 2xl:mt-[174px] 3xl:mt-[208px] mt-[232px] w-[100%]">
                  <div className="absolute bg-gradient  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-y-[0] left-[20%] right-[19%] rounded-radius32 shadow-bs1 w-[61%]"></div>
                  <Stack className="absolute bg-gradient1  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] rounded-radius16 w-[100%]">
                    <Image
                      src={"images/img_maskgroup_34.png"}
                      className="common-pointer absolute lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] object-cover w-[100%]"
                      onClick={handleNavigate8}
                      alt="MaskGroup"
                    />
                    <Column className="absolute items-start justify-start right-[6%] top-[11%] w-[82%]">
                      <Column className="w-[100%]">
                        <Stack className="lg:h-[54px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] h-[91px] w-[100%]">
                          <Image
                            src={"images/img_vector_15.svg"}
                            className="absolute lg:h-[17px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] h-[29px] object-contain right-[0] top-[0] w-[11%]"
                            alt="Vector"
                          />
                          <Text className="absolute bottom-[0] font-bold leading-lh left-[0] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[95%]">
                            {
                              <>
                                {`Upgrade your`}
                                <br />
                                {`Account to get more benefits`}
                              </>
                            }
                          </Text>
                        </Stack>
                      </Column>
                      <Button className="bg-white_A700 font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] py-[10.705px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius8 text-bluegray_900 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[52%]">{`Upgrade`}</Button>
                    </Column>
                  </Stack>
                </Stack>
              </Column>
            </Column>
          </aside>
          <Column className="lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mr-[22px] xl:mr-[26px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[78%]">
            <Row className="items-start justify-between w-[100%]">
              <Text className="font-bold lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] text-bluegray_900 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[auto]">{`Customer Reviews`}</Text>
              <Image
                src={"images/img_menu_11.svg"}
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] mr-[1px] object-contain w-[19%]"
                alt="menu"
              />
            </Row>
            <List
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] gap-[32px] grid grid-cols-2 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius16 w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <Column className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[27%]">
                    <Text className="font-bold lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[auto]">{`Positive Review`}</Text>
                    <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`June 1, 2020, 08:22 AM`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[34px] not-italic text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`This Month`}</Text>
                    <Column className="w-[100%]">
                      <Row className="items-start justify-start w-[100%]">
                        <Text className="font-bold text-bluegray_900 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[auto]">{`3.678`}</Text>
                        <Text className="font-normal lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Reviews`}</Text>
                      </Row>
                    </Column>
                  </Column>
                  <div className="lg:h-[109px] xl:h-[125px] 2xl:h-[140px] 3xl:h-[168px] h-[186px] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] mr-[32px] w-[59%]">
                    <ResponsiveContainer>
                      <BarChart data={BarData}>
                        <RechartsTooltip />
                        <RechartsLegend />
                        <Bar dataKey="c0" fill="#ff8080" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Row>
                <Row className="items-end justify-start mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]">
                  <Image
                    src={"images/img_arrow_9.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    alt="arrow"
                  />
                  <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-light_green_500 w-[auto]">{`+ 15%`}</Text>
                  <Row className="items-center justify-center xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] ml-[158.58px] lg:ml-[92px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[31%]">
                    <Text className="font-semibold 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Mon`}</Text>
                    <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] ml-[37.22px] 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Tue`}</Text>
                    <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] ml-[36.47px] 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Wed`}</Text>
                    <Text className="font-semibold lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] ml-[35.22px] 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Thu`}</Text>
                  </Row>
                  <Text className="font-semibold lg:ml-[25px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] ml-[42.87px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Fri`}</Text>
                  <Text className="font-semibold lg:ml-[27px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46.29px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Sat`}</Text>
                  <Text className="font-semibold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40.12px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Sun`}</Text>
                </Row>
              </Column>
              <Column className="bg-white_A700 lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius16 w-[100%]">
                <Row className="items-end justify-evenly w-[100%]">
                  <Column className="items-start justify-start w-[28%]">
                    <Text className="font-bold text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[auto]">{`Negative Review`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`June 1, 2020, 08:22 AM`}</Text>
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] mt-[34px] not-italic text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`This Month`}</Text>
                    <Column className="w-[100%]">
                      <Row className="items-start justify-start w-[100%]">
                        <Text className="font-bold text-bluegray_900 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[auto]">{`1.678`}</Text>
                        <Text className="font-normal lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] mt-[25px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Reviews`}</Text>
                      </Row>
                    </Column>
                  </Column>
                  <Stack className="xl:h-[109px] 2xl:h-[122px] 3xl:h-[146px] h-[162px] lg:h-[95px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[59%]">
                    <Column className="absolute bg-bluegray_900 inset-x-[0] items-center justify-center mx-[auto] xl:py-[3px] lg:py-[3px] 3xl:py-[4px] 2xl:py-[4px] py-[5.5px] rounded-radius8 top-[0] w-[22%]">
                      <Text className="font-semibold mx-[auto] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_100 text-left w-[auto]">{`186`}</Text>
                      <Text className="font-normal mx-[auto] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left text-white_A700 w-[auto]">{`Reviews`}</Text>
                    </Column>
                    <Image
                      src={"images/img_polygon3_1.png"}
                      className="absolute lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] inset-x-[0] mx-[auto] object-contain rounded-radius2 top-[33%] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      alt="Polygon3"
                    />
                    <div className="absolute xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] inset-x-[0] inset-y-[1%] object-cover w-[100%]">
                      <ResponsiveContainer>
                        <BarChart data={BarData1}>
                          <RechartsTooltip />
                          <RechartsLegend />
                          <Bar dataKey="c0" fill="#4da6ff" />
                          <Bar dataKey="c1" fill="#66ffff" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </Stack>
                </Row>
                <Row className="items-end justify-start mt-[10px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]">
                  <Image
                    src={"images/img_arrow_10.svg"}
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    alt="arrow"
                  />
                  <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400 w-[auto]">{`+ 15%`}</Text>
                  <Row className="items-center justify-center xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] ml-[158.58px] lg:ml-[92px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] w-[31%]">
                    <Text className="font-semibold 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Mon`}</Text>
                    <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] ml-[37.22px] 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Tue`}</Text>
                    <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] ml-[36.47px] 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Wed`}</Text>
                    <Text className="font-semibold lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] ml-[35.22px] 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Thu`}</Text>
                  </Row>
                  <Text className="font-semibold lg:ml-[25px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] ml-[42.87px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Fri`}</Text>
                  <Text className="font-semibold lg:ml-[27px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] ml-[46.29px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Sat`}</Text>
                  <Text className="font-semibold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40.12px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Sun`}</Text>
                </Row>
              </Column>
            </List>
            <Column className="items-start justify-start lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[100%]">
              <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[auto]">{`Recent Reviews`}</Text>
              <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                <Row className="items-center justify-between w-[100%]">
                  <div className=" input-wrap">
                    <Image
                      src={"images/img_xmlid_223_7.svg"}
                      className="absolute cursor-pointer h-[24px] left-[28px] lg:h-[14px] lg:left-[16px] xl:h-[17px] xl:left-[18px] 2xl:h-[19px] 2xl:left-[21px] 3xl:h-[22px] 3xl:left-[25px] my-[auto] inset-y-[0]"
                      alt="XMLID 223"
                    />
                    {inputvalue?.length > 0 ? (
                      <Image
                        onClick={() => setInputvalue("")}
                        src={"images/close4.svg"}
                        className="absolute cursor-pointer h-[20px] right-[22px] lg:h-[12px] lg:right-[12px] xl:h-[14px] xl:right-[14px] 2xl:h-[16px] 2xl:right-[16px] 3xl:h-[19px] 3xl:right-[19px] my-[auto] inset-y-[0]"
                        alt="Vector"
                      />
                    ) : (
                      ""
                    )}
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="bg-white_A700 font-normal not-italic lg:pl-[46px] xl:pl-[53px] 2xl:pl-[60px] 3xl:pl-[72px] pl-[80px] lg:pr-[12px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] pr-[22px] lg:py-[11px] xl:py-[13px] 2xl:py-[14px] 3xl:py-[17px] py-[19.545px] rounded-radius16 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                      name="Group203"
                      placeholder={`Search`}
                    ></Input>
                  </div>
                  <Image
                    src={"images/img_button_12.svg"}
                    className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] mr-[1px] object-contain rounded-radius16 w-[10%]"
                    alt="button"
                  />
                </Row>
                <Grid className="lg:gap-[10px] xl:gap-[12px] 2xl:gap-[13px] 3xl:gap-[16px] gap-[18px] grid grid-cols-4 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Stack className="lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] w-[100%]">
                    <Image
                      src={"images/img_border_35.svg"}
                      className="absolute lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] inset-[0] object-cover rounded-radius16 w-[100%]"
                      alt="border"
                    />
                    <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[83%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center justify-start w-[100%]">
                          <div className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] ml-[1px] rounded-radius16 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"></div>
                          <Column className="mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[37%]">
                            <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Ruby Roben`}</Text>
                            <Text className="font-normal xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`User since 2020`}</Text>
                          </Column>
                        </Row>
                        <Line className="bg-gray_300 h-[1px] ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[99%]" />
                      </Column>
                      <Row className="items-center justify-start ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] w-[62%]">
                        <Image
                          src={"images/img_image_34.svg"}
                          className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                          alt="image"
                        />
                        <Column className="items-start xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] w-[61%]">
                          <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Fish Burger`}</Text>
                          <Column className="xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] w-[100%]">
                            <RatingBar
                              className="mx-[auto]"
                              value={5}
                              starCount={5}
                              activeColor="var(--amber_600)"
                              size={((window.innerWidth - 15) * 16) / 1920}
                            ></RatingBar>
                          </Column>
                        </Column>
                      </Row>
                      <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[99%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Ordered June 21, 2020`}</Text>
                    </Column>
                  </Stack>
                  <Stack className="lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] w-[100%]">
                    <Image
                      src={"images/img_border_36.svg"}
                      className="absolute lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] inset-[0] object-cover rounded-radius16 w-[100%]"
                      alt="border"
                    />
                    <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[83%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center justify-start w-[100%]">
                          <div className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] ml-[1px] rounded-radius16 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"></div>
                          <Column className="items-start mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[42%]">
                            <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Samantha W.`}</Text>
                            <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`User since 2020`}</Text>
                          </Column>
                        </Row>
                        <Line className="bg-gray_300 h-[1px] ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[99%]" />
                      </Column>
                      <Row className="items-center justify-start ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] w-[62%]">
                        <Image
                          src={"images/img_image_35.svg"}
                          className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                          alt="image"
                        />
                        <Column className="items-start xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] w-[61%]">
                          <Text className="font-medium xl:mr-[4px] lg:mr-[4px] 2xl:mr-[5px] 3xl:mr-[6px] mr-[7px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Beef Burger`}</Text>
                          <Column className="xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] w-[100%]">
                            <RatingBar
                              className="mx-[auto]"
                              value={5}
                              starCount={5}
                              activeColor="var(--amber_600)"
                              size={((window.innerWidth - 15) * 16) / 1920}
                            ></RatingBar>
                          </Column>
                        </Column>
                      </Row>
                      <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[99%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Ordered June 21, 2020`}</Text>
                    </Column>
                  </Stack>
                  <Stack className="lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] w-[100%]">
                    <Image
                      src={"images/img_border_37.svg"}
                      className="absolute lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] inset-[0] object-cover rounded-radius16 w-[100%]"
                      alt="border"
                    />
                    <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[83%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center justify-start w-[100%]">
                          <div className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] ml-[1px] rounded-radius16 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"></div>
                          <Column className="items-start mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[37%]">
                            <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Jack Jock`}</Text>
                            <Text className="font-normal xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`User since 2020`}</Text>
                          </Column>
                        </Row>
                        <Line className="bg-gray_300 h-[1px] ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[99%]" />
                      </Column>
                      <Row className="items-center justify-start ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] w-[69%]">
                        <Image
                          src={"images/img_image_36.svg"}
                          className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                          alt="image"
                        />
                        <Column className="items-start xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] w-[65%]">
                          <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Cheese Burger`}</Text>
                          <RatingBar
                            className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px]"
                            value={5}
                            starCount={5}
                            activeColor="var(--amber_600)"
                            size={((window.innerWidth - 15) * 16) / 1920}
                          ></RatingBar>
                        </Column>
                      </Row>
                      <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[99%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Ordered June 21, 2020`}</Text>
                    </Column>
                  </Stack>
                  <Stack className="lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] w-[100%]">
                    <Image
                      src={"images/img_border_38.svg"}
                      className="absolute lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] inset-[0] object-cover rounded-radius16 w-[100%]"
                      alt="border"
                    />
                    <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[83%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center justify-start w-[100%]">
                          <div className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] ml-[1px] rounded-radius16 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"></div>
                          <Column className="items-start mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[50%]">
                            <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`David Bengkong`}</Text>
                            <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`User since 2020`}</Text>
                          </Column>
                        </Row>
                        <Line className="bg-gray_300 h-[1px] ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[99%]" />
                      </Column>
                      <Row className="items-center justify-start ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] w-[67%]">
                        <Image
                          src={"images/img_image_37.svg"}
                          className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                          alt="image"
                        />
                        <Column className="items-start xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] w-[64%]">
                          <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Double Burger`}</Text>
                          <RatingBar
                            className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px]"
                            value={5}
                            starCount={5}
                            activeColor="var(--amber_600)"
                            size={((window.innerWidth - 15) * 16) / 1920}
                          ></RatingBar>
                        </Column>
                      </Row>
                      <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[99%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Ordered June 21, 2020`}</Text>
                    </Column>
                  </Stack>
                  <Stack className="lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] w-[100%]">
                    <Image
                      src={"images/img_border_39.svg"}
                      className="absolute lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] inset-[0] object-cover rounded-radius16 w-[100%]"
                      alt="border"
                    />
                    <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[83%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center justify-start w-[100%]">
                          <div className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] ml-[1px] rounded-radius16 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"></div>
                          <Column className="items-start mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[42%]">
                            <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Cynthia Hope`}</Text>
                            <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`User since 2020`}</Text>
                          </Column>
                        </Row>
                        <Line className="bg-gray_300 h-[1px] ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[99%]" />
                      </Column>
                      <Row className="items-center justify-start ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] w-[72%]">
                        <Image
                          src={"images/img_image_38.svg"}
                          className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                          alt="image"
                        />
                        <Column className="items-start xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] w-[66%]">
                          <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Pepperoni Pizza`}</Text>
                          <RatingBar
                            className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px]"
                            value={5}
                            starCount={5}
                            activeColor="var(--amber_600)"
                            size={((window.innerWidth - 15) * 16) / 1920}
                          ></RatingBar>
                        </Column>
                      </Row>
                      <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[99%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Ordered June 21, 2020`}</Text>
                    </Column>
                  </Stack>
                  <Stack className="lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] w-[100%]">
                    <Image
                      src={"images/img_border_40.svg"}
                      className="absolute lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] inset-[0] object-cover rounded-radius16 w-[100%]"
                      alt="border"
                    />
                    <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[83%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center justify-start w-[100%]">
                          <div className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] ml-[1px] rounded-radius16 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"></div>
                          <Column className="items-start mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[38%]">
                            <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Dani Ahmad`}</Text>
                            <Text className="font-normal lg:mr-[2px] 2xl:mr-[3px] xl:mr-[3px] 3xl:mr-[4px] mr-[5px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`User since 2020`}</Text>
                          </Column>
                        </Row>
                        <Line className="bg-gray_300 h-[1px] ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[99%]" />
                      </Column>
                      <Row className="items-center justify-start ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] w-[62%]">
                        <Image
                          src={"images/img_image_39.svg"}
                          className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                          alt="image"
                        />
                        <Column className="items-start xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] w-[61%]">
                          <Text className="font-medium lg:mr-[1px] 3xl:mr-[2px] 2xl:mr-[2px] xl:mr-[2px] mr-[3px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Vegan Pizza`}</Text>
                          <Column className="xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] w-[100%]">
                            <RatingBar
                              className="mx-[auto]"
                              value={5}
                              starCount={5}
                              activeColor="var(--amber_600)"
                              size={((window.innerWidth - 15) * 16) / 1920}
                            ></RatingBar>
                          </Column>
                        </Column>
                      </Row>
                      <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[99%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Ordered June 21, 2020`}</Text>
                    </Column>
                  </Stack>
                  <Stack className="lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] w-[100%]">
                    <Image
                      src={"images/img_border_41.svg"}
                      className="absolute lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] inset-[0] object-cover rounded-radius16 w-[100%]"
                      alt="border"
                    />
                    <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[83%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center justify-start w-[100%]">
                          <div className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] ml-[1px] rounded-radius16 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"></div>
                          <Column className="items-start mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[37%]">
                            <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Jordan Nico`}</Text>
                            <Text className="font-normal mr-[1px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`User since 2020`}</Text>
                          </Column>
                        </Row>
                        <Line className="bg-gray_300 h-[1px] ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[99%]" />
                      </Column>
                      <Row className="items-center justify-start ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] w-[62%]">
                        <Image
                          src={"images/img_image_40.svg"}
                          className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                          alt="image"
                        />
                        <Column className="items-start xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] w-[61%]">
                          <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Fried Rice`}</Text>
                          <Column className="xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] w-[100%]">
                            <RatingBar
                              className="mx-[auto]"
                              value={5}
                              starCount={5}
                              activeColor="var(--amber_600)"
                              size={((window.innerWidth - 15) * 16) / 1920}
                            ></RatingBar>
                          </Column>
                        </Column>
                      </Row>
                      <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[99%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Ordered June 21, 2020`}</Text>
                    </Column>
                  </Stack>
                  <Stack className="lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] w-[100%]">
                    <Image
                      src={"images/img_border_42.svg"}
                      className="absolute lg:h-[192px] xl:h-[219px] 2xl:h-[247px] 3xl:h-[296px] h-[328px] inset-[0] object-cover rounded-radius16 w-[100%]"
                      alt="border"
                    />
                    <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[83%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center justify-start w-[100%]">
                          <div className="bg-gray_400 lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] ml-[1px] rounded-radius16 lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"></div>
                          <Column className="items-start mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] w-[49%]">
                            <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Salsabile Tango`}</Text>
                            <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`User since 2020`}</Text>
                          </Column>
                        </Row>
                        <Line className="bg-gray_300 h-[1px] ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[99%]" />
                      </Column>
                      <Row className="items-center justify-start ml-[1px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] w-[78%]">
                        <Image
                          src={"images/img_image_41.svg"}
                          className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                          alt="image"
                        />
                        <Column className="items-start xl:mb-[3px] 3xl:mb-[4px] mb-[5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] w-[69%]">
                          <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Japanese Ramen`}</Text>
                          <RatingBar
                            className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px]"
                            value={5}
                            starCount={5}
                            activeColor="var(--amber_600)"
                            size={((window.innerWidth - 15) * 16) / 1920}
                          ></RatingBar>
                        </Column>
                      </Row>
                      <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[99%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] not-italic text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Ordered June 21, 2020`}</Text>
                    </Column>
                  </Stack>
                </Grid>
                <Row className="items-center justify-between mr-[11px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] 3xl:mr-[9px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[99%]">
                  <Text className="font-normal xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] my-[15px] lg:my-[8px] not-italic text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">
                    <span className="text-gray_500 font-poppins">
                      <>{`Showing `}</>
                    </span>
                    <span className="text-bluegray_900 font-poppins">
                      <>{`1-5`}</>
                    </span>
                    <span className="text-bluegray_900 font-poppins">
                      <>{` `}</>
                    </span>
                    <span className="text-gray_500 font-poppins">
                      <>{`from`}</>
                    </span>
                    <span className="text-bluegray_900 font-poppins">
                      <>{` `}</>
                    </span>
                    <span className="text-bluegray_900 font-poppins">
                      <>{`100`}</>
                    </span>
                    <span className="text-bluegray_900 font-poppins">
                      <>{` `}</>
                    </span>
                    <span className="text-gray_500 font-poppins">
                      <>{`data`}</>
                    </span>
                  </Text>
                  <Row className="items-center justify-between w-[19%]">
                    <Button className="bg-transparent lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] my-[9.5px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]">
                      {""}
                    </Button>
                    <Button className="bg-amber_600 font-normal lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] leading-lh my-[1px] not-italic 3xl:pb-[10px] pb-[12px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] pl-[22px] pt-[11px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] rounded-radius16 text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]">{`1`}</Button>
                    <Button className="bg-amber_600 font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] leading-lh not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius16 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]">{`2`}</Button>
                    <Button className="bg-amber_600 font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] leading-lh not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius16 text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]">{`3`}</Button>
                    <Button className="bg-transparent lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] my-[9.5px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]">
                      {""}
                    </Button>
                  </Row>
                </Row>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default CustomerReviewsPage;
