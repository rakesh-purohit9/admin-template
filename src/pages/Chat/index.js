import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { List } from "components/List";
import { Line } from "components/Line";
import { CheckBox } from "components/CheckBox";
import { FloatingInput } from "components/FloatingInput";

const ChatPage = () => {
  const navigate = useNavigate();

  const handleNavigate66 = () => navigate("/");
  const handleNavigate67 = () => navigate("/foodorder");
  const handleNavigate57 = () => navigate("/favoritemenu");
  const handleNavigate58 = () => navigate("/orderhistory");
  const handleNavigate59 = () => navigate("/bills");
  const handleNavigate60 = () => navigate("/settingscustomer");
  const handleNavigate30 = () => navigate("/dashboardrestaurant");

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-poppins mx-[auto] w-[100%]">
        <Row className="items-center justify-start w-[100%]">
          <aside className="bg-white_A700 items-center w-[18%]">
            <Column className="">
              <Column className="items-center justify-start lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] w-[73%]">
                <Text className="font-bold mx-[auto] text-bluegray_900 lg:text-fs23 xl:text-fs26 2xl:text-fs30 3xl:text-fs36 text-fs40 text-left">
                  <span className="text-bluegray_900 font-poppins">
                    <>{`GoMeal`}</>
                  </span>
                  <span className="text-amber_600 font-poppins">
                    <>{`.`}</>
                  </span>
                </Text>
                <Row
                  className="common-pointer items-center justify-start lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] mt-[62px] rounded-radius16 shadow-bs w-[100%]"
                  onClick={handleNavigate66}
                >
                  <Image
                    src="img_restaurantloca_3.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="RestaurantLoca"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Dashboard`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate67}
                >
                  <Image
                    src="img_deliveryscoote_3.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="DeliveryScoote"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Food Order`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate57}
                >
                  <Image
                    src="img_review_3.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Review"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Favorite`}</Text>
                </Row>
                <Row className="bg-amber_600 items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]">
                  <Image
                    src="img_orderdiscussio_3.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="OrderDiscussio"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Message`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate58}
                >
                  <Image
                    src="img_24hourfoodde_3.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="24HourFoodDe"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Order History`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate59}
                >
                  <Image
                    src="img_bill_3.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Bill"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Bills`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate60}
                >
                  <Image
                    src="img_setting_3.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Setting"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Setting`}</Text>
                </Row>
                <Stack className="lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[100%]">
                  <div className="absolute bg-gradient  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-y-[0] left-[20%] right-[19%] rounded-radius32 shadow-bs1 w-[61%]"></div>
                  <Stack className="absolute bg-gradient1  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] rounded-radius16 w-[100%]">
                    <Image
                      src="img_maskgroup_22.png"
                      className="common-pointer absolute lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] object-cover w-[100%]"
                      onClick={handleNavigate30}
                      alt="MaskGroup"
                    />
                    <Column className="absolute items-start justify-start right-[6%] top-[11%] w-[82%]">
                      <Column className="w-[100%]">
                        <Stack className="lg:h-[54px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] h-[91px] w-[100%]">
                          <Image
                            src="img_vector_3.svg"
                            className="absolute lg:h-[17px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] h-[29px] object-contain right-[0] top-[0] w-[11%]"
                            alt="Vector"
                          />
                          <Text className="absolute bottom-[0] font-bold leading-lh left-[0] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[95%]">
                            {
                              <>
                                {`Upgrade your`}
                                <br />
                                {`Account to Get Free Voucher`}
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
          <Column className="lg:mb-[37px] xl:mb-[42px] 2xl:mb-[48px] 3xl:mb-[57px] mb-[64px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[78%]">
            <Row className="items-start justify-between w-[100%]">
              <Text className="font-bold lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] text-bluegray_900 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left">{`Message`}</Text>
              <Image
                src="img_menu_3.svg"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain w-[19%]"
                alt="menu"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Column className="bg-white_A700 items-start rounded-radius16 w-[34%]">
                <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Row className="items-center justify-start w-[100%]">
                    <div className="2xl:ml-[24px] 3xl:ml-[28px] lg:ml-[18px] ml-[32px] w-[71%] xl:ml-[21px] input-wrap">
                      <Image
                        onClick={() => setInputvalue("")}
                        src={
                          inputvalue?.length ? "close.svg" : "img_magnifier.svg"
                        }
                        className="absolute cursor-pointer h-[32px] right-[0] lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] my-[auto] inset-y-[0]"
                        alt="magnifier"
                      />
                      <Input
                        value={inputvalue}
                        onChange={(e) => setInputvalue(e?.target?.value)}
                        className="bg-gray_100 lg:pr-[209px] xl:pr-[239px] 2xl:pr-[269px] 3xl:pr-[323px] pr-[359px] rounded-radius16 w-[100%]"
                        name="CustomRectangle"
                        placeholder={""}
                      ></Input>
                    </div>
                    <Image
                      src="img_addbutton.svg"
                      className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] object-contain rounded-radius16 lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                      alt="addbutton"
                    />
                  </Row>
                </Column>
                <Text className="font-semibold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Your Chat`}</Text>
                <Column className="items-center lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] mb-[36px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                  <Stack className="lg:h-[334px] xl:h-[382px] 2xl:h-[430px] 3xl:h-[516px] h-[572px] w-[100%]">
                    <div className="absolute bg-gray_300 lg:h-[58px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[89px] h-[98px] opacity-op25 top-[14%] w-[100%]"></div>
                    <Column className="absolute inset-[0] w-[100%]">
                      <List
                        className="gap-[0] min-h-[auto] w-[100%]"
                        orientation="vertical"
                      >
                        <Column className="lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                          <Row className="items-center justify-start w-[100%]">
                            <div className="bg-gray_400 lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] rounded-radius16 lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"></div>
                            <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] my-[1px] w-[72%]">
                              <Row className="items-start justify-between w-[100%]">
                                <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Driver #1`}</Text>
                                <Text className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`12:45 PM`}</Text>
                              </Row>
                              <Row className="items-start justify-between lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] w-[100%]">
                                <Text className="font-normal lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Lorem ipsum dolor sit amet...`}</Text>
                                <Image
                                  src="img_doublecheck.svg"
                                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                  alt="DoubleCheck"
                                />
                              </Row>
                            </Column>
                          </Row>
                          <Line className="bg-gray_100 h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] w-[100%]" />
                        </Column>
                        <Column className="lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                          <Row className="items-center justify-start w-[100%]">
                            <div className="bg-gray_400 lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] rounded-radius16 lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"></div>
                            <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] my-[1px] w-[40%]">
                              <Text className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Driver #2`}</Text>
                              <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Lorem ipsum dolor sit amet...`}</Text>
                            </Column>
                            <Column className="items-start ml-[108px] lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] my-[1px] w-[11%]">
                              <Column className="w-[100%]">
                                <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`12:45 PM`}</Text>
                              </Column>
                              <Image
                                src="img_notif.svg"
                                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                alt="Notif"
                              />
                            </Column>
                          </Row>
                          <Line className="bg-gray_100 h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] w-[100%]" />
                        </Column>
                        <Column className="lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                          <Row className="items-center justify-start w-[100%]">
                            <div className="bg-gray_400 lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] rounded-radius16 lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"></div>
                            <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] my-[1px] w-[72%]">
                              <Row className="items-start justify-between w-[100%]">
                                <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Driver #3`}</Text>
                                <Text className="font-normal lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`12:45 PM`}</Text>
                              </Row>
                              <Row className="items-start justify-between lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] w-[100%]">
                                <Text className="font-normal lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Lorem ipsum dolor sit amet...`}</Text>
                                <Image
                                  src="img_doublecheck_1.svg"
                                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                  alt="DoubleCheck"
                                />
                              </Row>
                            </Column>
                          </Row>
                          <Line className="bg-gray_100 h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] w-[100%]" />
                        </Column>
                        <Column className="lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                          <Row className="items-center justify-start w-[100%]">
                            <Column className="bg-gray_400 lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] rounded-radius16 lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]">
                              <div className="bg-light_green_500 border-2 border-solid border-white_A700 lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] mt-[44px] rounded-radius4 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"></div>
                            </Column>
                            <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] my-[1px] w-[40%]">
                              <Text className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Driver #4`}</Text>
                              <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Lorem ipsum dolor sit amet...`}</Text>
                            </Column>
                            <Column className="items-start ml-[108px] lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] my-[1px] w-[11%]">
                              <Column className="w-[100%]">
                                <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`12:45 PM`}</Text>
                              </Column>
                              <Image
                                src="img_notif_1.svg"
                                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                alt="Notif"
                              />
                            </Column>
                          </Row>
                          <Line className="bg-gray_100 h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] w-[100%]" />
                        </Column>
                        <Column className="lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8px] w-[100%]">
                          <Row className="items-center justify-start w-[100%]">
                            <div className="bg-gray_400 lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] rounded-radius16 lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"></div>
                            <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] my-[1px] w-[40%]">
                              <Text className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Driver #5`}</Text>
                              <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Lorem ipsum dolor sit amet...`}</Text>
                            </Column>
                            <Column className="items-start ml-[108px] lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] my-[1px] w-[11%]">
                              <Column className="w-[100%]">
                                <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`12:45 PM`}</Text>
                              </Column>
                              <Image
                                src="img_notif_2.svg"
                                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[11px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                alt="Notif"
                              />
                            </Column>
                          </Row>
                          <Line className="bg-gray_100 h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] w-[100%]" />
                        </Column>
                      </List>
                      <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                        <Row className="items-start justify-start w-[100%]">
                          <Column className="bg-gray_400 lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] items-center justify-end lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] rounded-radius16 lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]">
                            <div className="bg-light_green_500 border-2 border-solid border-white_A700 lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] mt-[44px] rounded-radius4 xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"></div>
                          </Column>
                          <Column className="items-start justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] my-[1px] w-[40%]">
                            <Text className="font-semibold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Driver #6`}</Text>
                            <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Lorem ipsum dolor sit amet...`}</Text>
                          </Column>
                          <Text className="font-normal lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[33px] mb-[37px] ml-[108px] lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] mt-[1px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`12:45 PM`}</Text>
                        </Row>
                        <Line className="bg-gray_100 h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] w-[100%]" />
                      </Column>
                    </Column>
                  </Stack>
                  <Button className="border border-amber_600 border-solid font-semibold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.545px] rounded-radius16 shadow-bs2 text-amber_600 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[87%]">{`View More`}</Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] rounded-radius16 w-[63%]">
                <Row className="items-center justify-start lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39px] mx-[auto] w-[92%]">
                  <div className="bg-gray_400 lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] rounded-radius16 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"></div>
                  <Column className="items-start lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] w-[13%]">
                    <Text className="font-bold text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`Driver #2`}</Text>
                    <CheckBox
                      className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[1px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[71%]"
                      inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] bg-light_green_500 h-[27px] lg:h-[16px] lg:w-[15px] rounded-radius4 w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                      name="Group66"
                      label={`Online`}
                    ></CheckBox>
                  </Column>
                  <Image
                    src="img_videocall.svg"
                    className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:ml-[334px] xl:ml-[382px] 2xl:ml-[430px] 3xl:ml-[516px] ml-[574px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                    alt="VideoCall"
                  />
                  <Image
                    src="img_dots.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    alt="Dots"
                  />
                </Row>
                <Line className="bg-gray_300 h-[1px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] mt-[33px] opacity-op5 w-[100%]" />
                <Column className="items-start justify-start lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] w-[100%]">
                  <Text className="font-semibold 3xl:mx-[115px] mx-[128px] lg:mx-[74px] xl:mx-[85px] 2xl:mx-[96px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Driver`}</Text>
                  <Button className="bg-amber_600 font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] 3xl:mx-[115px] mx-[128px] lg:mx-[74px] xl:mx-[85px] 2xl:mx-[96px] not-italic xl:pb-[11px] 3xl:pb-[15px] pb-[17.545px] xl:pt-[12px] 3xl:pt-[16px] pt-[18.545px] lg:py-[10px] 2xl:py-[13px] rounded-radius16 text-bluegray_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[11%]">{`Hello !`}</Button>
                  <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                    <Row className="items-start justify-start w-[100%]">
                      <Image
                        src="img_avatar.svg"
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] mb-[34px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                        alt="avatar"
                      />
                      <Column className="items-start justify-start lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] ml-[28px] w-[44%]">
                        <Column className="font-poppins w-[100%]">
                          <FloatingInput
                            className="peer focus:border-blue-600 placeholder-transparent focus:outline-none w-full h-10 placeholder:bg-amber_600 bg-amber_600 border-0 border-b-[1px] border-gray_100_3f border-solid font-normal placeholder:left-[24.8900000000001px] not-italic pb-[18.545px] pl-[24.890015px] pr-[21.109985px] pt-[17.545px] rounded-radius16 placeholder:text-bluegray_900 text-bluegray_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[100%]"
                            name="Group195"
                            labelClasses="absolute transition-all -translate-y-[4px] peer-focus:-translate-y-[4px] peer-placeholder-shown:translate-y-[17px] bg-amber_600 left-[24.8900000000001px] text-bluegray_900 peer-placeholder-shown:font-normal peer-placeholder-shown:leading-lh1 peer-placeholder-shown:text-fs18 peer-placeholder-shown:font-fontfamily peer-placeholder-shown:text-bluegray_900 peer-focus:font-normal peer-focus:leading-lh1 peer-focus:text-fs18 peer-focus:font-fontfamily peer-focus:text-bluegray_900"
                            wrapperClasses="bg-transparent border-0 w-[100%]"
                            labelText="Your order according to application yes?"
                            defaultText="Your order according to application yes?"
                          ></FloatingInput>
                        </Column>
                        <Text className="font-cairo font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`12:45 PM`}</Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                  <Column className="items-end w-[100%]">
                    <Text className="font-semibold 3xl:mx-[108px] mx-[121px] lg:mx-[70px] xl:mx-[80px] 2xl:mx-[90px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`You`}</Text>
                  </Column>
                  <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                    <Row className="items-start justify-center w-[100%]">
                      <Column className="items-start justify-start w-[31%]">
                        <Button className="bg-amber_600 font-normal font-poppins ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic xl:pb-[11px] 3xl:pb-[15px] pb-[17.545px] xl:pt-[12px] 3xl:pt-[16px] pt-[18.545px] lg:py-[10px] 2xl:py-[13px] rounded-radius16 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[30%]">{`Hello`}</Button>
                        <Column className="font-poppins xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] mt-[17px] lg:mt-[9px] w-[100%]">
                          <Input
                            className="bg-amber_600 placeholder:bg-transparent border-0 font-normal not-italic xl:pb-[10px] 2xl:pb-[11px] 3xl:pb-[13px] pb-[15.545px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[21px] pl-[24px] xl:pt-[11px] 2xl:pt-[12px] 3xl:pt-[14px] pt-[16.545px] lg:py-[9px] rounded-radius16 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                            name="Chat"
                            placeholder={`Yes, my order according to 
application. Thank you`}
                          ></Input>
                        </Column>
                        <Text className="font-cairo font-normal ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`12:45 PM`}</Text>
                      </Column>
                      <Image
                        src="img_avatar_1.svg"
                        className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] mb-[34px] lg:ml-[16px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] ml-[29px] mt-[100px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] object-contain lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px] w-[60px]"
                        alt="avatar"
                      />
                    </Row>
                  </Column>
                </Column>
                <Line className="bg-gray_100 h-[1px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] mt-[82px] w-[100%]" />
                <Row className="bg-gray_100 border-2 border-gray_100 border-solid items-center justify-end xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] mb-[32px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] lg:my-[18px] rounded-radius16 w-[93%]">
                  <Text className="font-normal xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] lg:my-[15px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Write your message...`}</Text>
                  <Image
                    src="img_attachment.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[227px] xl:ml-[260px] 2xl:ml-[292px] 3xl:ml-[351px] ml-[390px] lg:my-[11px] xl:my-[13px] 2xl:my-[15px] 3xl:my-[18px] my-[20px] object-contain rounded-radius16 lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Attachment"
                  />
                  <Image
                    src="img_dots_1.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[16px] xl:my-[18px] 2xl:my-[21px] 3xl:my-[25px] my-[28px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    alt="Dots"
                  />
                  <Button className="bg-amber_600 font-semibold lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[22px] ml-[25.5px] xl:my-[11px] 2xl:my-[12px] 3xl:my-[14px] my-[16.5px] lg:my-[9px] rounded-radius16 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[15%]">{`Send`}</Button>
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ChatPage;
