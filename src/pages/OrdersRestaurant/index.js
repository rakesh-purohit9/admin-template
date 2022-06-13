import React from "react";

import { useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { List } from "components/List";
import { Line } from "components/Line";

const OrdersRestaurantPage = () => {
  const navigate = useNavigate();

  const handleNavigate33 = () => navigate("/dashboardrestaurant");
  const handleNavigate24 = () => navigate("/menu");
  const handleNavigate25 = () => navigate("/customerreviews");
  const handleNavigate26 = () => navigate("/settingsrestaurant");
  const handleNavigate27 = () => navigate("/");
  const handleNavigate3 = () => navigate("/");

  return (
    <>
      <Column className="bg-gray_100 font-poppins mx-[auto] w-[100%]">
        <Row className="items-center justify-start w-[100%]">
          <aside className="bg-white_A700 items-center w-[18%]">
            <Column className="">
              <Column className="items-center justify-start lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] w-[73%]">
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
                  onClick={handleNavigate33}
                >
                  <Image
                    src={"images/img_restaurantloca_10.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="RestaurantLoca"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[auto]">{`Dashboard`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate24}
                >
                  <Image
                    src={"images/img_bill_10.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Bill"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Menu`}</Text>
                </Row>
                <Row className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]">
                  <Image
                    src={"images/img_deliveryscoote_10.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="DeliveryScoote"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Food Order`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate25}
                >
                  <Image
                    src={"images/img_review_10.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Review"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Reviews`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate26}
                >
                  <Image
                    src={"images/img_setting_10.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Setting"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Setting`}</Text>
                </Row>
                <Stack className="lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] lg:mt-[135px] xl:mt-[154px] 2xl:mt-[174px] 3xl:mt-[208px] mt-[232px] w-[100%]">
                  <div className="absolute bg-gradient  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-y-[0] left-[20%] right-[19%] rounded-radius32 shadow-bs1 w-[61%]"></div>
                  <Stack className="absolute bg-gradient1  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] rounded-radius16 w-[100%]">
                    <Image
                      src={"images/img_maskgroup_31.png"}
                      className="common-pointer absolute lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] object-cover w-[100%]"
                      onClick={handleNavigate27}
                      alt="MaskGroup"
                    />
                    <Column className="absolute items-start justify-start right-[6%] top-[11%] w-[82%]">
                      <Column className="w-[100%]">
                        <Stack className="lg:h-[54px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] h-[91px] w-[100%]">
                          <Image
                            src={"images/img_vector_14.svg"}
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
                      <Button
                        className="common-pointer bg-white_A700 font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] py-[10.705px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius8 text-bluegray_900 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[52%]"
                        onClick={handleNavigate3}
                      >{`Upgrade`}</Button>
                    </Column>
                  </Stack>
                </Stack>
              </Column>
            </Column>
          </aside>
          <Column className="lg:mb-[30px] xl:mb-[34px] 2xl:mb-[39px] 3xl:mb-[46px] mb-[52px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[78%]">
            <Row className="items-start justify-between w-[100%]">
              <Text className="font-bold lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] text-bluegray_900 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[auto]">{`Orders`}</Text>
              <Image
                src={"images/img_menu_10.svg"}
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain w-[19%]"
                alt="menu"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Column className="bg-white_A700 items-start rounded-radius16 w-[32%]">
                <Text className="font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[auto]">{`Order in`}</Text>
                <Column className="lg:mb-[39px] xl:mb-[45px] 2xl:mb-[51px] 3xl:mb-[61px] mb-[68px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                  <Tabs
                    selectedTabClassName="!text-white_A700 rounded-tl-[8px] rounded-tr-[0] rounded-bl-[8px] rounded-br-[0] font-poppins font-normal !opacity-100 !bg-amber_600 not-italic"
                    selectedTabPanelClassName="mt-[24px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] tab-panel--selected"
                    className="w-[100%]"
                  >
                    <TabList className="flex flex-row items-center justify-start w-[100%]">
                      <Tab className="bg-gray_100 font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] not-italic opacity-100 py-[10.705px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 w-[29%]">
                        <Button className="">{`Order in`}</Button>
                      </Tab>
                      <Tab className="bg-gray_100 font-normal not-italic opacity-100 py-[10.705px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 w-[29%]">
                        <Button className="">{`Prepared`}</Button>
                      </Tab>
                      <Tab className="bg-gray_100 font-normal not-italic opacity-100 py-[10.705px] lg:py-[6px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 w-[29%]">
                        <Button className="">{`Delivered`}</Button>
                      </Tab>
                    </TabList>
                    {[...Array(3)].map(() => {
                      return (
                        <TabPanel className="w-[100%]">
                          <Row className="items-center justify-start w-[100%]">
                            <List
                              className="gap-[0] min-h-[auto] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[87%]"
                              orientation="vertical"
                            >
                              <Stack className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                                <Image
                                  src={"images/img_border_28.svg"}
                                  className="absolute lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] inset-[0] object-cover rounded-radius16 w-[100%]"
                                  alt="border"
                                />
                                <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[85%]">
                                  <Column className="items-start w-[43%]">
                                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Order #1`}</Text>
                                    <Text className="font-normal xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`June 1, 2020, 08:22 AM`}</Text>
                                  </Column>
                                  <Text className="font-semibold mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] ml-[72px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400 w-[auto]">
                                    <span className="text-amber_600 font-poppins">
                                      <>{`$`}</>
                                    </span>
                                    <span className="text-bluegray_900 font-poppins">
                                      <>{`202.00`}</>
                                    </span>
                                  </Text>
                                  <Image
                                    src={"images/img_dropdown_4.svg"}
                                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain rounded-radius8 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                                    alt="dropdown"
                                  />
                                </Row>
                              </Stack>
                              <Stack className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                                <Image
                                  src={"images/img_border_29.svg"}
                                  className="absolute lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] inset-[0] object-cover rounded-radius16 w-[100%]"
                                  alt="border"
                                />
                                <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[85%]">
                                  <Column className="items-start w-[43%]">
                                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Order #2`}</Text>
                                    <Text className="font-normal xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`June 1, 2020, 08:22 AM`}</Text>
                                  </Column>
                                  <Text className="font-semibold mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] ml-[72px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400 w-[auto]">
                                    <span className="text-amber_600 font-poppins">
                                      <>{`$`}</>
                                    </span>
                                    <span className="text-bluegray_900 font-poppins">
                                      <>{`202.00`}</>
                                    </span>
                                  </Text>
                                  <Image
                                    src={"images/img_dropdown_5.svg"}
                                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain rounded-radius8 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                                    alt="dropdown"
                                  />
                                </Row>
                              </Stack>
                              <Stack className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                                <Image
                                  src={"images/img_border_30.svg"}
                                  className="absolute lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] inset-[0] object-cover rounded-radius16 w-[100%]"
                                  alt="border"
                                />
                                <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[85%]">
                                  <Column className="items-start w-[43%]">
                                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Order #3`}</Text>
                                    <Text className="font-normal xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`June 1, 2020, 08:22 AM`}</Text>
                                  </Column>
                                  <Text className="font-semibold mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] ml-[72px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400 w-[auto]">
                                    <span className="text-amber_600 font-poppins">
                                      <>{`$`}</>
                                    </span>
                                    <span className="text-bluegray_900 font-poppins">
                                      <>{`202.00`}</>
                                    </span>
                                  </Text>
                                  <Image
                                    src={"images/img_dropdown_6.svg"}
                                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain rounded-radius8 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                                    alt="dropdown"
                                  />
                                </Row>
                              </Stack>
                              <Stack className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                                <Image
                                  src={"images/img_border_31.svg"}
                                  className="absolute lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] inset-[0] object-cover rounded-radius16 w-[100%]"
                                  alt="border"
                                />
                                <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[85%]">
                                  <Column className="items-start w-[43%]">
                                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Order #4`}</Text>
                                    <Text className="font-normal xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`June 1, 2020, 08:22 AM`}</Text>
                                  </Column>
                                  <Text className="font-semibold mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] ml-[72px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400 w-[auto]">
                                    <span className="text-amber_600 font-poppins">
                                      <>{`$`}</>
                                    </span>
                                    <span className="text-bluegray_900 font-poppins">
                                      <>{`202.00`}</>
                                    </span>
                                  </Text>
                                  <Image
                                    src={"images/img_dropdown_7.svg"}
                                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain rounded-radius8 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                                    alt="dropdown"
                                  />
                                </Row>
                              </Stack>
                              <Stack className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                                <Image
                                  src={"images/img_border_32.svg"}
                                  className="absolute lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] inset-[0] object-cover rounded-radius16 w-[100%]"
                                  alt="border"
                                />
                                <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[85%]">
                                  <Column className="items-start w-[43%]">
                                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Order #5`}</Text>
                                    <Text className="font-normal xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`June 1, 2020, 08:22 AM`}</Text>
                                  </Column>
                                  <Text className="font-semibold mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] ml-[72px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400 w-[auto]">
                                    <span className="text-amber_600 font-poppins">
                                      <>{`$`}</>
                                    </span>
                                    <span className="text-bluegray_900 font-poppins">
                                      <>{`202.00`}</>
                                    </span>
                                  </Text>
                                  <Image
                                    src={"images/img_dropdown_8.svg"}
                                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain rounded-radius8 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                                    alt="dropdown"
                                  />
                                </Row>
                              </Stack>
                              <Stack className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                                <Image
                                  src={"images/img_border_33.svg"}
                                  className="absolute lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] inset-[0] object-cover rounded-radius16 w-[100%]"
                                  alt="border"
                                />
                                <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[85%]">
                                  <Column className="items-start w-[43%]">
                                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Order #1`}</Text>
                                    <Text className="font-normal xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`June 1, 2020, 08:22 AM`}</Text>
                                  </Column>
                                  <Text className="font-semibold mb-[11px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] ml-[72px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400 w-[auto]">
                                    <span className="text-amber_600 font-poppins">
                                      <>{`$`}</>
                                    </span>
                                    <span className="text-bluegray_900 font-poppins">
                                      <>{`202.00`}</>
                                    </span>
                                  </Text>
                                  <Image
                                    src={"images/img_dropdown_9.svg"}
                                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:mt-[10px] mt-[12px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] object-contain rounded-radius8 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                                    alt="dropdown"
                                  />
                                </Row>
                              </Stack>
                            </List>
                          </Row>
                        </TabPanel>
                      );
                    })}
                  </Tabs>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius16 w-[66%]">
                <Text className="font-bold lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[auto]">{`Order Details`}</Text>
                <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                  <Stack className="lg:h-[388px] xl:h-[444px] 2xl:h-[499px] 3xl:h-[598px] h-[664px] mx-[auto] w-[93%]">
                    <List
                      className="absolute bottom-[27%] gap-[0] inset-x-[0] min-h-[auto] mx-[auto] w-[93%]"
                      orientation="vertical"
                    >
                      <Row className="items-center justify-start lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                        <Image
                          src={"images/img_maskgroup_32.svg"}
                          className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] object-contain lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                          alt="MaskGroup"
                        />
                        <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[14px] lg:my-[8px] xl:my-[9px] w-[17%]">
                          <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Pepperoni Pizza`}</Text>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`x1`}</Text>
                        </Column>
                        <Text className="font-semibold xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] lg:ml-[322px] xl:ml-[368px] 2xl:ml-[414px] 3xl:ml-[497px] ml-[552px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] lg:my-[15px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">
                          <span className="text-bluegray_900 font-poppins">
                            <>{`+`}</>
                          </span>
                          <span className="text-amber_600 font-poppins">
                            <>{`$`}</>
                          </span>
                          <span className="text-bluegray_900 font-poppins">
                            <>{`5.59`}</>
                          </span>
                        </Text>
                      </Row>
                      <Row className="items-center justify-start lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                        <Image
                          src={"images/img_maskgroup_33.svg"}
                          className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] object-contain lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                          alt="MaskGroup"
                        />
                        <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[14px] lg:my-[8px] xl:my-[9px] w-[16%]">
                          <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Cheese Burger`}</Text>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`x1`}</Text>
                        </Column>
                        <Text className="font-semibold xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] lg:ml-[327px] xl:ml-[374px] 2xl:ml-[421px] 3xl:ml-[505px] ml-[561px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] lg:my-[15px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">
                          <span className="text-bluegray_900 font-poppins">
                            <>{`+`}</>
                          </span>
                          <span className="text-amber_600 font-poppins">
                            <>{`$`}</>
                          </span>
                          <span className="text-bluegray_900 font-poppins">
                            <>{`5.59`}</>
                          </span>
                        </Text>
                      </Row>
                    </List>
                    <Column className="absolute border border-gray_300 border-solid inset-[0] items-center justify-start rounded-radius16 w-[100%]">
                      <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[93%]">
                        <Column className="items-start w-[18%]">
                          <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Order #1`}</Text>
                          <Text className="font-normal xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`June 1, 2020, 08:22 AM`}</Text>
                        </Column>
                        <Row className="items-center justify-between my-[1px] w-[19%]">
                          <div className="bg-gray_400 lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] mb-[1px] rounded-radius16 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"></div>
                          <Column className="items-start w-[66%]">
                            <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Ruby Roben`}</Text>
                            <Text className="font-normal xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`User since 2020`}</Text>
                          </Column>
                        </Row>
                      </Row>
                      <Line className="bg-gray_300 h-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[93%]" />
                      <Row className="items-center justify-start lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] w-[100%]">
                        <Column className="items-start lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] w-[41%]">
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Delivery Address`}</Text>
                          <Row className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[42%]">
                            <Image
                              src={"images/img_location_13.svg"}
                              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                              alt="Location"
                            />
                            <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Elm Street, 23`}</Text>
                          </Row>
                          <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
                        </Column>
                        <List
                          className="gap-[0] xl:mb-[2px] lg:mb-[2px] 3xl:mb-[3px] 2xl:mb-[3px] mb-[4px] min-h-[auto] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] ml-[48px] w-[33%]"
                          orientation="vertical"
                        >
                          <Row className="items-center justify-between lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] mr-[48px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[84%]">
                            <Column className="items-start w-[44%]">
                              <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Estimation Time`}</Text>
                              <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`10 Min`}</Text>
                            </Column>
                            <Column className="w-[25%]">
                              <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Payment`}</Text>
                              <Text className="font-bold xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`E-Wallet`}</Text>
                            </Column>
                          </Row>
                          <Row className="items-center justify-between lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                            <Column className="items-start w-[20%]">
                              <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Distance`}</Text>
                              <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`2.5 Km`}</Text>
                            </Column>
                            <Column className="items-start w-[37%]">
                              <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`Payment Status`}</Text>
                              <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Completed`}</Text>
                            </Column>
                          </Row>
                        </List>
                      </Row>
                      <Line className="bg-gray_300 h-[1px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] w-[93%]" />
                      <Line className="bg-gray_300 h-[1px] lg:mt-[166px] xl:mt-[190px] 2xl:mt-[214px] 3xl:mt-[257px] mt-[286px] mx-[auto] w-[93%]" />
                      <Row className="items-center justify-between lg:mb-[19px] xl:mb-[22px] 2xl:mb-[24px] 3xl:mb-[29px] mb-[33px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] mt-[23px] mx-[auto] w-[93%]">
                        <Text className="font-medium xl:mb-[2px] 3xl:mb-[3px] mb-[4px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] lg:my-[2px] 2xl:my-[3px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Total`}</Text>
                        <Text className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-red_400 w-[auto]">
                          <span className="text-amber_600 font-poppins">
                            <>{`$`}</>
                          </span>
                          <span className="text-bluegray_900 font-poppins">
                            <>{`12.59`}</>
                          </span>
                        </Text>
                      </Row>
                    </Column>
                  </Stack>
                  <Row className="items-center justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <div className="w-[20%] input-wrap">
                      <Image
                        src={"images/img_border_34.svg"}
                        className="absolute right-[0] m-[auto] rounded-radius16 inset-y-[0]"
                        alt="border"
                      />
                      <Button className="bg-transparent lg:pr-[231px] xl:pr-[264px] 2xl:pr-[297px] 3xl:pr-[356px] pr-[396px] w-[100%]">
                        {""}
                      </Button>
                    </div>
                    <Button className="bg-amber_600 font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] rounded-radius16 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[21%]">{`Accept Order`}</Button>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default OrdersRestaurantPage;
