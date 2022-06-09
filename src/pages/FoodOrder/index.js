import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Grid } from "components/Grid";
import { Line } from "components/Line";
import { GoogleMap } from "components/GoogleMap";
import { List } from "components/List";

const FoodOrderPage = () => {
  const navigate = useNavigate();

  const handleNavigate74 = () => navigate("/");
  const handleNavigate75 = () => navigate("/favoritemenu");
  const handleNavigate76 = () => navigate("/chat");
  const handleNavigate77 = () => navigate("/orderhistory");
  const handleNavigate71 = () => navigate("/bills");
  const handleNavigate72 = () => navigate("/settingscustomer");
  const handleNavigate31 = () => navigate("/dashboardrestaurant");

  return (
    <>
      <Column className="bg-gray_100 font-poppins mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[100%]">
          <aside className="bg-white_A700 items-center w-[18%]">
            <Column className="">
              <Column className="items-center justify-start lg:mb-[264px] xl:mb-[302px] 2xl:mb-[340px] 3xl:mb-[408px] mb-[454px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] w-[73%]">
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
                  onClick={handleNavigate74}
                >
                  <Image
                    src="img_restaurantloca_1.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="RestaurantLoca"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Dashboard`}</Text>
                </Row>
                <Row className="bg-amber_600 items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]">
                  <Image
                    src="img_deliveryscoote_1.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="DeliveryScoote"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Food Order`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate75}
                >
                  <Image
                    src="img_review_1.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Review"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Favorite`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate76}
                >
                  <Image
                    src="img_orderdiscussio_1.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="OrderDiscussio"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Message`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate77}
                >
                  <Image
                    src="img_24hourfoodde_1.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="24HourFoodDe"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Order History`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate71}
                >
                  <Image
                    src="img_bill_1.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Bill"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Bills`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate72}
                >
                  <Image
                    src="img_setting_1.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Setting"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Setting`}</Text>
                </Row>
                <Stack className="lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[100%]">
                  <div className="absolute bg-gradient  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-y-[0] left-[20%] right-[19%] rounded-radius32 shadow-bs1 w-[61%]"></div>
                  <Stack className="absolute bg-gradient1  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] rounded-radius16 w-[100%]">
                    <Image
                      src="img_maskgroup_5.png"
                      className="common-pointer absolute lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] object-cover w-[100%]"
                      onClick={handleNavigate31}
                      alt="MaskGroup"
                    />
                    <Column className="absolute items-start justify-start right-[6%] top-[11%] w-[82%]">
                      <Column className="w-[100%]">
                        <Stack className="lg:h-[54px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] h-[91px] w-[100%]">
                          <Image
                            src="img_vector_1.svg"
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
          <Column className="lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[54%]">
            <Row className="items-start justify-between w-[100%]">
              <Text className="font-bold lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] text-bluegray_900 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left">{`Food Order`}</Text>
              <div className="bg-transparent border-0 w-[49%] input-wrap">
                <Image
                  src="img_xmlid_223_1.svg"
                  className="absolute h-[24px] left-[28px] bg-transparent border-0 lg:h-[14px] lg:left-[16px] xl:h-[17px] xl:left-[18px] 2xl:h-[19px] 2xl:left-[21px] 3xl:h-[22px] 3xl:left-[25px] my-[auto] inset-y-[0]"
                  alt="XMLID 223"
                />
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border-0 font-normal not-italic lg:pl-[46px] xl:pl-[53px] 2xl:pl-[60px] 3xl:pl-[72px] pl-[80px] lg:py-[11px] xl:py-[13px] 2xl:py-[14px] 3xl:py-[17px] py-[19.545px] rounded-radius16 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  name="Group40"
                  placeholder={`Search order`}
                ></Input>
              </div>
            </Row>
            <Grid className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-3 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Column className="bg-white_A700 items-start justify-start lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius16 w-[100%]">
                <Column className="items-center w-[100%]">
                  <Text className="font-bold mx-[auto] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Order #1`}</Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Nov 11, 2021 , 18:38 PM`}</Text>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                </Column>
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] lg:mx-[21px] xl:mx-[24px] 2xl:mx-[27px] 3xl:mx-[32px] mx-[36px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fast Food Resto`}</Text>
                <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[43%]">
                  <Row className="items-center justify-between w-[31%]">
                    <Image
                      src="img_star1.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      alt="Star1"
                    />
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`5.0`}</Text>
                  </Row>
                  <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`1k+ Reviews`}</Text>
                </Row>
                <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Line className="bg-gray_300 h-[1px] mx-[auto] w-[81%]" />
                  <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Delivery Time`}</Text>
                    <Text className="font-medium text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`10 Min`}</Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Distance`}</Text>
                    <Text className="font-medium text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`2.5 Km`}</Text>
                  </Row>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                  <Column className="items-start justify-start xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Order Menu`}</Text>
                    <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-start w-[100%]">
                        <Image
                          src="img_maskgroup_6.svg"
                          className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                          alt="MaskGroup"
                        />
                        <Column className="items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] w-[41%]">
                          <Text className="font-semibold text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Pepperoni Pizza`}</Text>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`x1`}</Text>
                        </Column>
                        <Text className="font-semibold 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:my-[12px] xl:my-[14px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">
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
                      <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]">
                        <Image
                          src="img_maskgroup_7.svg"
                          className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                          alt="MaskGroup"
                        />
                        <Column className="items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] w-[39%]">
                          <Text className="font-semibold text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Cheese Burger`}</Text>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`x1`}</Text>
                        </Column>
                        <Text className="font-semibold 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] ml-[45px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:my-[12px] xl:my-[14px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">
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
                    </Column>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                  <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Total`}</Text>
                    <Text className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400">
                      <span className="text-amber_600 font-poppins">
                        <>{`$`}</>
                      </span>
                      <span className="text-bluegray_900 font-poppins">
                        <>{`202.00`}</>
                      </span>
                    </Text>
                  </Row>
                  <Button className="bg-light_green_500_19 border border-light_green_500 border-solid font-medium lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] 2xl:py-[11px] 3xl:py-[13px] py-[14.705px] lg:py-[8px] xl:py-[9px] rounded-radius16 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-light_green_500 w-[81%]">{`Completed`}</Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-amber_600 border-solid items-start justify-start lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius16 w-[100%]">
                <Column className="items-center w-[100%]">
                  <Text className="font-bold mx-[auto] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Order #2`}</Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Nov 11, 2021 , 18:38 PM`}</Text>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                </Column>
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] lg:mx-[21px] xl:mx-[24px] 2xl:mx-[27px] 3xl:mx-[32px] mx-[36px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fast Food Resto`}</Text>
                <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[43%]">
                  <Row className="items-center justify-between w-[31%]">
                    <Image
                      src="img_star1_1.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      alt="Star1"
                    />
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`5.0`}</Text>
                  </Row>
                  <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`1k+ Reviews`}</Text>
                </Row>
                <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Line className="bg-gray_300 h-[1px] mx-[auto] w-[81%]" />
                  <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Delivery Time`}</Text>
                    <Text className="font-medium text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`10 Min`}</Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Distance`}</Text>
                    <Text className="font-medium text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`2.5 Km`}</Text>
                  </Row>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                  <Column className="items-start justify-start xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Order Menu`}</Text>
                    <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-start w-[100%]">
                        <Image
                          src="img_maskgroup_8.svg"
                          className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                          alt="MaskGroup"
                        />
                        <Column className="items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] w-[41%]">
                          <Text className="font-semibold text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Pepperoni Pizza`}</Text>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`x1`}</Text>
                        </Column>
                        <Text className="font-semibold 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:my-[12px] xl:my-[14px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">
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
                      <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]">
                        <Image
                          src="img_maskgroup_9.svg"
                          className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                          alt="MaskGroup"
                        />
                        <Column className="items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] w-[39%]">
                          <Text className="font-semibold text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Cheese Burger`}</Text>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`x1`}</Text>
                        </Column>
                        <Text className="font-semibold 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] ml-[45px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:my-[12px] xl:my-[14px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">
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
                    </Column>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                  <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Total`}</Text>
                    <Text className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400">
                      <span className="text-amber_600 font-poppins">
                        <>{`$`}</>
                      </span>
                      <span className="text-bluegray_900 font-poppins">
                        <>{`202.00`}</>
                      </span>
                    </Text>
                  </Row>
                  <Button className="bg-amber_600_19 border border-amber_600 border-solid font-medium lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] 2xl:py-[11px] 3xl:py-[13px] py-[14.705px] lg:py-[8px] xl:py-[9px] rounded-radius16 text-amber_600 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[81%]">{`Delivering to you`}</Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start justify-start lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius16 w-[100%]">
                <Column className="items-center w-[100%]">
                  <Text className="font-bold mx-[auto] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Order #3`}</Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Nov 11, 2021 , 18:38 PM`}</Text>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                </Column>
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] lg:mx-[21px] xl:mx-[24px] 2xl:mx-[27px] 3xl:mx-[32px] mx-[36px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fast Food Resto`}</Text>
                <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[43%]">
                  <Row className="items-center justify-between w-[31%]">
                    <Image
                      src="img_star1_2.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      alt="Star1"
                    />
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`5.0`}</Text>
                  </Row>
                  <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`1k+ Reviews`}</Text>
                </Row>
                <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Line className="bg-gray_300 h-[1px] mx-[auto] w-[81%]" />
                  <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Delivery Time`}</Text>
                    <Text className="font-medium text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`10 Min`}</Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Distance`}</Text>
                    <Text className="font-medium text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`2.5 Km`}</Text>
                  </Row>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                  <Column className="items-start justify-start xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Order Menu`}</Text>
                    <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-start w-[100%]">
                        <Image
                          src="img_maskgroup_10.svg"
                          className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                          alt="MaskGroup"
                        />
                        <Column className="items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] w-[41%]">
                          <Text className="font-semibold text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Pepperoni Pizza`}</Text>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`x1`}</Text>
                        </Column>
                        <Text className="font-semibold 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:my-[12px] xl:my-[14px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">
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
                      <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]">
                        <Image
                          src="img_maskgroup_11.svg"
                          className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                          alt="MaskGroup"
                        />
                        <Column className="items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] w-[39%]">
                          <Text className="font-semibold text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Cheese Burger`}</Text>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`x1`}</Text>
                        </Column>
                        <Text className="font-semibold 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] ml-[45px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:my-[12px] xl:my-[14px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">
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
                    </Column>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                  <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Total`}</Text>
                    <Text className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400">
                      <span className="text-amber_600 font-poppins">
                        <>{`$`}</>
                      </span>
                      <span className="text-bluegray_900 font-poppins">
                        <>{`202.00`}</>
                      </span>
                    </Text>
                  </Row>
                  <Button className="bg-blue_600_19 border border-blue_600 border-solid font-medium lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] 2xl:py-[11px] 3xl:py-[13px] py-[14.705px] lg:py-[8px] xl:py-[9px] rounded-radius16 text-blue_600 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[81%]">{`Order being prepared`}</Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start justify-start lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius16 w-[100%]">
                <Column className="items-center w-[100%]">
                  <Text className="font-bold mx-[auto] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Order #4`}</Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Nov 11, 2021 , 18:38 PM`}</Text>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                </Column>
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] lg:mx-[21px] xl:mx-[24px] 2xl:mx-[27px] 3xl:mx-[32px] mx-[36px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fast Food Resto`}</Text>
                <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[43%]">
                  <Row className="items-center justify-between w-[31%]">
                    <Image
                      src="img_star1_3.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      alt="Star1"
                    />
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`5.0`}</Text>
                  </Row>
                  <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`1k+ Reviews`}</Text>
                </Row>
                <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Line className="bg-gray_300 h-[1px] mx-[auto] w-[81%]" />
                  <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Delivery Time`}</Text>
                    <Text className="font-medium text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`10 Min`}</Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Distance`}</Text>
                    <Text className="font-medium text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`2.5 Km`}</Text>
                  </Row>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                  <Column className="items-start justify-start xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Order Menu`}</Text>
                    <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-start w-[100%]">
                        <Image
                          src="img_maskgroup_12.svg"
                          className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                          alt="MaskGroup"
                        />
                        <Column className="items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] w-[41%]">
                          <Text className="font-semibold text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Pepperoni Pizza`}</Text>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`x1`}</Text>
                        </Column>
                        <Text className="font-semibold 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:my-[12px] xl:my-[14px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">
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
                      <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]">
                        <Image
                          src="img_maskgroup_13.svg"
                          className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                          alt="MaskGroup"
                        />
                        <Column className="items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] w-[39%]">
                          <Text className="font-semibold text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Cheese Burger`}</Text>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`x1`}</Text>
                        </Column>
                        <Text className="font-semibold 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] ml-[45px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:my-[12px] xl:my-[14px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">
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
                    </Column>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                  <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Total`}</Text>
                    <Text className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400">
                      <span className="text-amber_600 font-poppins">
                        <>{`$`}</>
                      </span>
                      <span className="text-bluegray_900 font-poppins">
                        <>{`202.00`}</>
                      </span>
                    </Text>
                  </Row>
                  <Button className="bg-light_green_500_19 border border-light_green_500 border-solid font-medium lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] 2xl:py-[11px] 3xl:py-[13px] py-[14.705px] lg:py-[8px] xl:py-[9px] rounded-radius16 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-light_green_500 w-[81%]">{`Completed`}</Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start justify-start lg:py-[18px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] py-[32px] rounded-radius16 w-[100%]">
                <Column className="items-center w-[100%]">
                  <Text className="font-bold mx-[auto] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Order #5`}</Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Nov 11, 2021 , 18:38 PM`}</Text>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                </Column>
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] lg:mx-[21px] xl:mx-[24px] 2xl:mx-[27px] 3xl:mx-[32px] mx-[36px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fast Food Resto`}</Text>
                <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[43%]">
                  <Row className="items-center justify-between w-[31%]">
                    <Image
                      src="img_star1_4.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      alt="Star1"
                    />
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`5.0`}</Text>
                  </Row>
                  <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`1k+ Reviews`}</Text>
                </Row>
                <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Line className="bg-gray_300 h-[1px] mx-[auto] w-[81%]" />
                  <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Delivery Time`}</Text>
                    <Text className="font-medium text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`10 Min`}</Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Distance`}</Text>
                    <Text className="font-medium text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`2.5 Km`}</Text>
                  </Row>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                  <Column className="items-start justify-start xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Order Menu`}</Text>
                    <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-start w-[100%]">
                        <Image
                          src="img_maskgroup_14.svg"
                          className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                          alt="MaskGroup"
                        />
                        <Column className="items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] w-[41%]">
                          <Text className="font-semibold text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Pepperoni Pizza`}</Text>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`x1`}</Text>
                        </Column>
                        <Text className="font-semibold 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:my-[12px] xl:my-[14px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">
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
                      <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]">
                        <Image
                          src="img_maskgroup_15.svg"
                          className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                          alt="MaskGroup"
                        />
                        <Column className="items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] w-[39%]">
                          <Text className="font-semibold text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Cheese Burger`}</Text>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`x1`}</Text>
                        </Column>
                        <Text className="font-semibold 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] ml-[45px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:my-[12px] xl:my-[14px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">
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
                    </Column>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                  <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Total`}</Text>
                    <Text className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400">
                      <span className="text-amber_600 font-poppins">
                        <>{`$`}</>
                      </span>
                      <span className="text-bluegray_900 font-poppins">
                        <>{`202.00`}</>
                      </span>
                    </Text>
                  </Row>
                  <Button className="bg-light_green_500_19 border border-light_green_500 border-solid font-medium lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] 2xl:py-[11px] 3xl:py-[13px] py-[14.705px] lg:py-[8px] xl:py-[9px] rounded-radius16 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-light_green_500 w-[81%]">{`Completed`}</Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-start justify-start rounded-radius16 w-[100%]">
                <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Text className="font-bold mx-[auto] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Order #6`}</Text>
                  <Text className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Nov 11, 2021 , 18:38 PM`}</Text>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                </Column>
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] lg:mx-[21px] xl:mx-[24px] 2xl:mx-[27px] 3xl:mx-[32px] mx-[36px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fast Food Resto`}</Text>
                <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] w-[43%]">
                  <Row className="items-center justify-between w-[31%]">
                    <Image
                      src="img_star1_5.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                      alt="Star1"
                    />
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`5.0`}</Text>
                  </Row>
                  <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`1k+ Reviews`}</Text>
                </Row>
                <Column className="items-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] mb-[20px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Line className="bg-gray_300 h-[1px] mx-[auto] w-[81%]" />
                  <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Delivery Time`}</Text>
                    <Text className="font-medium text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`10 Min`}</Text>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Distance`}</Text>
                    <Text className="font-medium text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`2.5 Km`}</Text>
                  </Row>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                  <Column className="items-start justify-start xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Order Menu`}</Text>
                    <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center justify-start w-[100%]">
                        <Image
                          src="img_maskgroup_16.svg"
                          className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                          alt="MaskGroup"
                        />
                        <Column className="items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] w-[41%]">
                          <Text className="font-semibold text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Pepperoni Pizza`}</Text>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`x1`}</Text>
                        </Column>
                        <Text className="font-semibold 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:my-[12px] xl:my-[14px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">
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
                      <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]">
                        <Image
                          src="img_maskgroup_17.svg"
                          className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] h-[64px] object-contain lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px] w-[64px]"
                          alt="MaskGroup"
                        />
                        <Column className="items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[5px] 2xl:my-[6px] xl:my-[6px] 3xl:my-[8px] my-[9px] w-[39%]">
                          <Text className="font-semibold text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Cheese Burger`}</Text>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`x1`}</Text>
                        </Column>
                        <Text className="font-semibold 2xl:mb-[15px] 3xl:mb-[18px] mb-[21px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] ml-[45px] 2xl:mt-[16px] 3xl:mt-[19px] mt-[22px] lg:my-[12px] xl:my-[14px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">
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
                    </Column>
                  </Column>
                  <Line className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[81%]" />
                  <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] mx-[auto] w-[81%]">
                    <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Total`}</Text>
                    <Text className="font-medium lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400">
                      <span className="text-amber_600 font-poppins">
                        <>{`$`}</>
                      </span>
                      <span className="text-bluegray_900 font-poppins">
                        <>{`202.00`}</>
                      </span>
                    </Text>
                  </Row>
                  <Button className="bg-light_green_500_19 border border-light_green_500 border-solid font-medium lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] 2xl:py-[11px] 3xl:py-[13px] py-[14.705px] lg:py-[8px] xl:py-[9px] rounded-radius16 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-light_green_500 w-[81%]">{`Completed`}</Button>
                </Column>
              </Column>
            </Grid>
          </Column>
          <Column className="bg-white_A700 items-start w-[24%]">
            <Column className="items-center lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[100%]">
              <Image
                src="img_menu_1.svg"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] mx-[auto] object-contain w-[82%]"
                alt="menu"
              />
            </Column>
            <Text className="font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[23px] xl:mx-[26px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[40px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`Order Tracker`}</Text>
            <Column className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Stack className="lg:h-[219px] xl:h-[251px] 2xl:h-[282px] 3xl:h-[338px] h-[375px] mx-[auto] lg:w-[218px] xl:w-[250px] 2xl:w-[281px] 3xl:w-[337px] w-[375px]">
                <GoogleMap
                  className="absolute lg:h-[219px] xl:h-[251px] 2xl:h-[282px] 3xl:h-[338px] h-[375px] inset-[0] w-[100%]"
                  showMarker={false}
                ></GoogleMap>
                <Stack className="absolute lg:h-[159px] xl:h-[182px] 2xl:h-[204px] 3xl:h-[245px] h-[271.5px] left-[23%] top-[11%] w-[43%]">
                  <Image
                    src="img_line.svg"
                    className="absolute bottom-[0] lg:h-[148px] xl:h-[169px] 2xl:h-[190px] 3xl:h-[228px] h-[253px] inset-x-[0] mx-[auto] object-contain w-[78%]"
                    alt="line"
                  />
                  <Image
                    src="img_tracker.svg"
                    className="absolute bottom-[1%] lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] h-[29.33px] left-[0] object-contain lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px] w-[29.33px]"
                    alt="tracker"
                  />
                  <Image
                    src="img_destination.svg"
                    className="absolute lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] h-[36px] object-contain right-[0] top-[0] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px] w-[36px]"
                    alt="destination"
                  />
                </Stack>
              </Stack>
            </Column>
            <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[23px] xl:mx-[26px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[40px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Your Address`}</Text>
            <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[23px] xl:mx-[26px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[40px] w-[34%]">
              <Image
                src="img_location_1.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                alt="Location"
              />
              <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Elm Street, 23`}</Text>
            </Row>
            <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[23px] xl:mx-[26px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[40px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[82%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
            <Column className="items-center lg:mb-[104px] xl:mb-[119px] 2xl:mb-[134px] 3xl:mb-[161px] mb-[179px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] mt-[46px] w-[100%]">
              <Column className="items-start justify-start mx-[auto] w-[82%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`Order Menu`}</Text>
                <Column className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="items-center justify-start xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] w-[100%]">
                      <Image
                        src="img_maskgroup_18.svg"
                        className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] object-contain lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                        alt="MaskGroup"
                      />
                      <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[14px] lg:my-[8px] xl:my-[9px] w-[38%]">
                        <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Pepperoni Pizza`}</Text>
                        <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`x1`}</Text>
                      </Column>
                      <Text className="font-semibold xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] ml-[71px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] lg:my-[15px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">
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
                    <Row className="items-center justify-start xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] w-[100%]">
                      <Image
                        src="img_maskgroup_19.svg"
                        className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] object-contain lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                        alt="MaskGroup"
                      />
                      <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[14px] lg:my-[8px] xl:my-[9px] w-[36%]">
                        <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Cheese Burger`}</Text>
                        <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`x1`}</Text>
                      </Column>
                      <Text className="font-semibold xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] lg:my-[15px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">
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
                    <Row className="items-center justify-start xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] w-[100%]">
                      <Image
                        src="img_maskgroup_20.svg"
                        className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] h-[80px] object-contain lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px] w-[80px]"
                        alt="MaskGroup"
                      />
                      <Column className="items-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] 2xl:my-[10px] 3xl:my-[12px] my-[14px] lg:my-[8px] xl:my-[9px] w-[30%]">
                        <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Vegan Pizza`}</Text>
                        <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`x1`}</Text>
                      </Column>
                      <Text className="font-semibold xl:mb-[17px] 2xl:mb-[19px] 3xl:mb-[23px] mb-[26px] ml-[104px] lg:ml-[60px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] mt-[27px] lg:my-[15px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">
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
                </Column>
              </Column>
              <Line className="bg-gray_300 h-[1px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] w-[82%]" />
              <Row className="items-center justify-between lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] w-[82%]">
                <Text className="font-medium xl:mb-[2px] 3xl:mb-[3px] mb-[4px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] lg:my-[2px] 2xl:my-[3px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Total`}</Text>
                <Text className="font-medium lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-red_400">
                  <span className="text-amber_600 font-poppins">
                    <>{`$`}</>
                  </span>
                  <span className="text-bluegray_900 font-poppins">
                    <>{`202.00`}</>
                  </span>
                </Text>
              </Row>
              <Button className="bg-amber_600_19 border border-amber_600 border-solid font-medium lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] rounded-radius16 text-amber_600 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[82%]">{`Delivering to you`}</Button>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default FoodOrderPage;
