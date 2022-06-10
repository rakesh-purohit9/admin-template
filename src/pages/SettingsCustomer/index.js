import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { List } from "components/List";
import { Grid } from "components/Grid";
import { Input } from "components/Input";
import { GoogleMap } from "components/GoogleMap";
import { TextArea } from "components/TextArea";

const SettingsCustomerPage = () => {
  const navigate = useNavigate();

  const handleNavigate45 = () => navigate("/");
  const handleNavigate35 = () => navigate("/foodorder");
  const handleNavigate36 = () => navigate("/favoritemenu");
  const handleNavigate37 = () => navigate("/chat");
  const handleNavigate38 = () => navigate("/orderhistory");
  const handleNavigate39 = () => navigate("/bills");
  const handleNavigate29 = () => navigate("/dashboardrestaurant");

  return (
    <>
      <Column className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Stack className="h-[1080px] lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] lg:mr-[23px] xl:mr-[26px] 2xl:mr-[30px] 3xl:mr-[36px] mr-[40px] w-[98%]">
          <Row className="absolute inset-[0] items-start justify-between w-[100%]">
            <aside className="bg-white_A700 items-center justify-center w-[18%]">
              <Column className="">
                <Column className="items-center justify-start lg:mb-[30px] xl:mb-[34px] 2xl:mb-[39px] 3xl:mb-[46px] mb-[52px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] w-[73%]">
                  <Text className="font-bold mx-[auto] text-bluegray_900 lg:text-fs23 xl:text-fs26 2xl:text-fs30 3xl:text-fs36 text-fs40 text-left w-[auto]">
                    <span className="text-bluegray_900 font-poppins">
                      <>{`GoMeal`}</>
                    </span>
                    <span className="text-amber_600 font-poppins">
                      <>{`.`}</>
                    </span>
                  </Text>
                  <Row
                    className="common-pointer items-center justify-start lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] mt-[62px] rounded-radius16 shadow-bs w-[100%]"
                    onClick={handleNavigate45}
                  >
                    <Image
                      src={"images/img_restaurantloca_7.svg"}
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                      alt="RestaurantLoca"
                    />
                    <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Dashboard`}</Text>
                  </Row>
                  <Row
                    className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                    onClick={handleNavigate35}
                  >
                    <Image
                      src={"images/img_deliveryscoote_7.svg"}
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                      alt="DeliveryScoote"
                    />
                    <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Food Order`}</Text>
                  </Row>
                  <Row
                    className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                    onClick={handleNavigate36}
                  >
                    <Image
                      src={"images/img_review_7.svg"}
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                      alt="Review"
                    />
                    <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Favorite`}</Text>
                  </Row>
                  <Row
                    className="common-pointer bg-amber_600 items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                    onClick={handleNavigate37}
                  >
                    <Image
                      src={"images/img_orderdiscussio_7.svg"}
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                      alt="OrderDiscussio"
                    />
                    <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[auto]">{`Message`}</Text>
                  </Row>
                  <Row
                    className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                    onClick={handleNavigate38}
                  >
                    <Image
                      src={"images/img_24hourfoodde_7.svg"}
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                      alt="24HourFoodDe"
                    />
                    <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Order History`}</Text>
                  </Row>
                  <Row
                    className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                    onClick={handleNavigate39}
                  >
                    <Image
                      src={"images/img_bill_7.svg"}
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                      alt="Bill"
                    />
                    <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Bills`}</Text>
                  </Row>
                  <Row className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]">
                    <Image
                      src={"images/img_setting_7.svg"}
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                      alt="Setting"
                    />
                    <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Setting`}</Text>
                  </Row>
                  <Stack className="lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[100%]">
                    <div className="absolute bg-gradient  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-y-[0] left-[20%] right-[19%] rounded-radius32 shadow-bs1 w-[61%]"></div>
                    <Stack className="absolute bg-gradient1  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] rounded-radius16 w-[100%]">
                      <Image
                        src={"images/img_maskgroup_28.png"}
                        className="common-pointer absolute lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] object-cover w-[100%]"
                        onClick={handleNavigate29}
                        alt="MaskGroup"
                      />
                      <Column className="absolute items-start justify-start right-[6%] top-[11%] w-[82%]">
                        <Column className="w-[100%]">
                          <Stack className="lg:h-[54px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] h-[91px] w-[100%]">
                            <Image
                              src={"images/img_vector_10.svg"}
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
            <Row className="items-start justify-between lg:mb-[562px] xl:mb-[643px] 2xl:mb-[723px] 3xl:mb-[868px] mb-[964px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[80%]">
              <Text className="font-bold lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] text-bluegray_900 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[auto]">{`Settings`}</Text>
              <Image
                src={"images/img_menu_7.svg"}
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain w-[19%]"
                alt="menu"
              />
            </Row>
          </Row>
          <Stack className="absolute bottom-[2%] lg:h-[514px] xl:h-[588px] 2xl:h-[661px] 3xl:h-[793px] h-[880px] right-[0] w-[80%]">
            <Stack className="absolute bg-white_A700 lg:h-[514px] xl:h-[588px] 2xl:h-[661px] 3xl:h-[793px] h-[880px] inset-[0] rounded-radius16 w-[100%]">
              <div className="absolute bg-gray_100 lg:h-[514px] xl:h-[588px] 2xl:h-[661px] 3xl:h-[793px] h-[880px] opacity-op5 right-[0] rounded-bl-[0] rounded-br-[16px] rounded-tl-[0] rounded-tr-[16px] w-[71%]"></div>
              <Line className="absolute bg-gray_300 lg:h-[514px] xl:h-[588px] 2xl:h-[661px] 3xl:h-[793px] h-[880px] left-[29%] opacity-op5 w-[1px]" />
            </Stack>
            <Row className="absolute h-[max-content] inset-y-[0] items-start justify-between left-[1%] my-[auto] w-[92%]">
              <Stack className="lg:h-[362px] xl:h-[414px] 2xl:h-[466px] 3xl:h-[559px] h-[620px] lg:mb-[119px] xl:mb-[136px] 2xl:mb-[153px] 3xl:mb-[183px] mb-[204px] w-[28%]">
                <div className="absolute bg-gray_100 h-[106px] lg:h-[62px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[96px] opacity-op8 rounded-radius16 top-[0] w-[100%]"></div>
                <List
                  className="absolute gap-[0] inset-[0] justify-center m-[auto] min-h-[auto] w-[92%]"
                  orientation="vertical"
                >
                  <Row className="items-start justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                    <Image
                      src={"images/img_icon_9.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[24px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] mb-[42px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="icon"
                    />
                    <Column className="items-start justify-start w-[86%]">
                      <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Account`}</Text>
                      <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                    <Image
                      src={"images/img_icon_10.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[24px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] mb-[42px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="icon"
                    />
                    <Column className="items-start justify-start w-[86%]">
                      <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Notification`}</Text>
                      <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                    <Image
                      src={"images/img_icon_11.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[24px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] mb-[42px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="icon"
                    />
                    <Column className="items-start justify-start w-[86%]">
                      <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Security`}</Text>
                      <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                    <Image
                      src={"images/img_icon_12.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[24px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] mb-[42px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="icon"
                    />
                    <Column className="items-start justify-start w-[86%]">
                      <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Payment`}</Text>
                      <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                    <Image
                      src={"images/img_icon_13.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[24px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] mb-[42px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="icon"
                    />
                    <Column className="items-start justify-start w-[86%]">
                      <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Help`}</Text>
                      <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    </Column>
                  </Row>
                  <Row className="items-start justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] w-[100%]">
                    <Image
                      src={"images/img_icon_14.svg"}
                      className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[24px] xl:mb-[28px] 2xl:mb-[31px] 3xl:mb-[37px] mb-[42px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                      alt="icon"
                    />
                    <Column className="items-start justify-start w-[86%]">
                      <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left w-[auto]">{`Privacy Policy`}</Text>
                      <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`}</Text>
                    </Column>
                  </Row>
                </List>
              </Stack>
              <Column className="font-inter items-start justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[67%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[auto]">{`Account`}</Text>
                <Column className="font-poppins lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                  <Column className="items-start justify-start w-[100%]">
                    <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Photo Profile`}</Text>
                    <Column className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] w-[100%]">
                      <Row className="items-center justify-start w-[100%]">
                        <div className="bg-gray_400 3xl:h-[109px] h-[120px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] rounded-radius16 3xl:w-[108px] w-[120px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]"></div>
                        <Button className="bg-white_A700 border border-gray_500 border-solid font-medium lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] my-[36px] 3xl:pb-[10px] pb-[11.545px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] 3xl:pt-[11px] pt-[12.545px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius8 text-bluegray_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[17%]">{`Change photo`}</Button>
                        <Button className="bg-transparent font-medium lg:mb-[26px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] mb-[46px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] mt-[47px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[8%]">{`Remove`}</Button>
                      </Row>
                    </Column>
                  </Column>
                  <Grid className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] gap-[40px] grid grid-cols-2 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                    <Column className="items-start justify-start w-[100%]">
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Username`}</Text>
                      <Input
                        className="placeholder:bg-transparent bg-transparent border border-gray_500 border-solid font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] 3xl:pb-[10px] pb-[11.545px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] lg:pl-[19px] xl:pl-[22px] 2xl:pl-[25px] 3xl:pl-[30px] pl-[34px] 3xl:pt-[11px] pt-[12.545px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius8 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[100%]"
                        name="form"
                        placeholder={`Jordan Nico`}
                      ></Input>
                    </Column>
                    <Column className="items-start justify-start w-[100%]">
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Phone`}</Text>
                      <Input
                        className="placeholder:bg-transparent bg-transparent border border-gray_500 border-solid font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] 3xl:pb-[10px] pb-[11.545px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] 3xl:pt-[11px] pt-[12.545px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius8 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[100%]"
                        name="form"
                        placeholder={`+123456789`}
                      ></Input>
                    </Column>
                    <Column className="items-start justify-start w-[100%]">
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Email`}</Text>
                      <Input
                        className="placeholder:bg-transparent bg-transparent border border-gray_500 border-solid font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] 3xl:pb-[11px] pb-[12.545px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] lg:pl-[19px] xl:pl-[22px] 2xl:pl-[25px] 3xl:pl-[30px] pl-[34px] 3xl:pt-[10px] pt-[11.545px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] rounded-radius8 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[100%]"
                        name="form"
                        placeholder={`ordanico@mail.com`}
                      ></Input>
                    </Column>
                    <Column className="items-start justify-start w-[100%]">
                      <Text className="font-normal font-poppins mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Password`}</Text>
                      <Input
                        className="placeholder:bg-transparent bg-transparent border border-gray_500 border-solid font-bold font-inter xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] pb-[11.06px] lg:pb-[6px] xl:pb-[7px] 2xl:pb-[8px] 3xl:pb-[9px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] pl-[32px] 3xl:pt-[10px] pt-[12.06px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius8 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[100%]"
                        name="form"
                        placeholder={`••••••••`}
                      ></Input>
                    </Column>
                  </Grid>
                  <Row className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] gap-[40px] grid grid-cols-2 items-center justify-between lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[100%]">
                    <Column className="items-start w-[100%]">
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Your Locatiom`}</Text>
                      <Stack className="2xl:h-[103px] 3xl:h-[124px] h-[137px] lg:h-[80px] xl:h-[92px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] w-[100%]">
                        <GoogleMap
                          className="absolute 2xl:h-[103px] 3xl:h-[124px] h-[137px] lg:h-[80px] xl:h-[92px] w-[100%]"
                          showMarker={false}
                        ></GoogleMap>
                        <Column className="absolute top-[13%] w-[100%]">
                          <Stack className="2xl:h-[103px] 3xl:h-[124px] h-[137px] lg:h-[80px] xl:h-[92px] outline outline-[1px] outline-gray_500 rounded-radius8 w-[100%]">
                            <Image
                              src={"images/img_form.svg"}
                              className="absolute 2xl:h-[103px] 3xl:h-[124px] h-[137px] lg:h-[80px] xl:h-[92px] inset-[0] object-cover w-[100%]"
                              alt="form"
                            />
                            <Row className="absolute bottom-[12%] lg:gap-[105px] xl:gap-[120px] 2xl:gap-[135px] 3xl:gap-[162px] gap-[181px] grid grid-cols-2 items-start justify-between right-[4%] w-[56%]">
                              <Image
                                src={"images/img_location_12.svg"}
                                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mb-[16px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] mb-[28px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                                alt="location"
                              />
                              <Image
                                src={"images/img_currentlocatio.svg"}
                                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] mt-[28px] object-contain lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]"
                                alt="currentlocatio"
                              />
                            </Row>
                          </Stack>
                        </Column>
                      </Stack>
                    </Column>
                    <Column className="items-start w-[100%]">
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Address Details`}</Text>
                      <TextArea
                        className="placeholder:bg-transparent bg-transparent border border-gray_500 border-solid font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] mt-[18px] xl:pb-[10px] 2xl:pb-[11px] 3xl:pb-[13px] pb-[15.545px] lg:pb-[9px] lg:pl-[19px] xl:pl-[22px] 2xl:pl-[25px] 3xl:pl-[30px] pl-[34px] lg:pt-[17px] xl:pt-[19px] 2xl:pt-[22px] 3xl:pt-[26px] pt-[29.545px] rounded-radius8 placeholder:text-bluegray_900 text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[100%]"
                        name="form"
                        placeholder={
                          <>
                            {`Franklin Avenue Street `}
                            <br />
                            {`New York, ABC 5562`}
                            <br />
                            {`United State`}
                          </>
                        }
                      ></TextArea>
                    </Column>
                  </Row>
                </Column>
                <Column className="font-poppins items-end lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] mt-[46px] w-[100%]">
                  <Button className="bg-amber_600 font-medium ml-[10px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] rounded-radius16 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[23%]">{`Save Setting`}</Button>
                </Column>
              </Column>
            </Row>
          </Stack>
        </Stack>
      </Column>
    </>
  );
};

export default SettingsCustomerPage;
