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

const FavoriteMenuPage = () => {
  const navigate = useNavigate();

  const handleNavigate68 = () => navigate("/");
  const handleNavigate69 = () => navigate("/foodorder");
  const handleNavigate70 = () => navigate("/chat");
  const handleNavigate63 = () => navigate("/orderhistory");
  const handleNavigate64 = () => navigate("/bills");
  const handleNavigate65 = () => navigate("/settingscustomer");
  const handleNavigate32 = () => navigate("/dashboardrestaurant");

  return (
    <>
      <Column className="bg-gray_100 font-poppins mx-[auto] w-[100%]">
        <Row className="items-center justify-start w-[100%]">
          <aside className="bg-white_A700 items-center w-[18%]">
            <Column className="">
              <Column className="items-center justify-start lg:mb-[121px] xl:mb-[139px] 2xl:mb-[156px] 3xl:mb-[188px] mb-[209px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] w-[73%]">
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
                  onClick={handleNavigate68}
                >
                  <Image
                    src="img_restaurantloca_2.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="RestaurantLoca"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Dashboard`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate69}
                >
                  <Image
                    src="img_deliveryscoote_2.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="DeliveryScoote"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Food Order`}</Text>
                </Row>
                <Row className="bg-amber_600 items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]">
                  <Image
                    src="img_review_2.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Review"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Favorite`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate70}
                >
                  <Image
                    src="img_orderdiscussio_2.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="OrderDiscussio"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Message`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate63}
                >
                  <Image
                    src="img_24hourfoodde_2.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="24HourFoodDe"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Order History`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate64}
                >
                  <Image
                    src="img_bill_2.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Bill"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Bills`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate65}
                >
                  <Image
                    src="img_setting_2.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Setting"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Setting`}</Text>
                </Row>
                <Stack className="lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[100%]">
                  <div className="absolute bg-gradient  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-y-[0] left-[20%] right-[19%] rounded-radius32 shadow-bs1 w-[61%]"></div>
                  <Stack className="absolute bg-gradient1  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] rounded-radius16 w-[100%]">
                    <Image
                      src="img_maskgroup_21.png"
                      className="common-pointer absolute lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] object-cover w-[100%]"
                      onClick={handleNavigate32}
                      alt="MaskGroup"
                    />
                    <Column className="absolute items-start justify-start right-[6%] top-[11%] w-[82%]">
                      <Column className="w-[100%]">
                        <Stack className="lg:h-[54px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] h-[91px] w-[100%]">
                          <Image
                            src="img_vector_2.svg"
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
          <Column className="items-center lg:mb-[30px] xl:mb-[34px] 2xl:mb-[39px] 3xl:mb-[46px] mb-[52px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[78%]">
            <Row className="items-start justify-between w-[100%]">
              <Text className="font-bold lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] text-bluegray_900 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left">{`Favorite Menu`}</Text>
              <Image
                src="img_menu_2.svg"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain w-[19%]"
                alt="menu"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <div className="bg-transparent border-0 w-[49%] input-wrap">
                <Image
                  src="img_xmlid_223_2.svg"
                  className="absolute h-[24px] left-[28px] bg-transparent border-0 lg:h-[14px] lg:left-[16px] xl:h-[17px] xl:left-[18px] 2xl:h-[19px] 2xl:left-[21px] 3xl:h-[22px] 3xl:left-[25px] my-[auto] inset-y-[0]"
                  alt="XMLID 223"
                />
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border-0 font-normal not-italic lg:pl-[46px] xl:pl-[53px] 2xl:pl-[60px] 3xl:pl-[72px] pl-[80px] lg:py-[11px] xl:py-[13px] 2xl:py-[14px] 3xl:py-[17px] py-[19.545px] rounded-radius16 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  name="Group51"
                  placeholder={`What do you want eat today...`}
                ></Input>
              </div>
              <Image
                src="img_button_3.svg"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain rounded-radius16 w-[10%]"
                alt="button"
              />
            </Row>
            <Grid className="lg:gap-[10px] xl:gap-[12px] 2xl:gap-[13px] 3xl:gap-[16px] gap-[18px] grid grid-cols-4 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Stack className="lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] w-[100%]">
                <Image
                  src="img_border_6.svg"
                  className="absolute lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] inset-[0] object-cover rounded-radius16 w-[100%]"
                  alt="border"
                />
                <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[82%]">
                  <Column className="w-[100%]">
                    <Row className="items-start justify-end w-[100%]">
                      <Image
                        src="img_image_6.svg"
                        className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src="img_love_6.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] mb-[156px] lg:mb-[91px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Love"
                      />
                    </Row>
                  </Column>
                  <Text className="font-medium lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fast Food Resto`}</Text>
                  <Row className="items-center justify-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[73%]">
                    <Row className="items-center justify-between w-[21%]">
                      <Image
                        src="img_star1_6.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                        alt="Star1"
                      />
                      <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`5.0`}</Text>
                    </Row>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`1k+ Reviews`}</Text>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`2.97km`}</Text>
                  </Row>
                  <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[100%]">
                      <Column className="items-start w-[34%]">
                        <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fish Burger`}</Text>
                        <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-red_400">
                          <span className="text-amber_600 font-poppins">
                            <>{`$`}</>
                          </span>
                          <span className="text-bluegray_900 font-poppins">
                            <>{`5.59`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src="img_button_4.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:my-[4px] object-contain rounded-radius16 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="button"
                      />
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] w-[100%]">
                <Image
                  src="img_border_7.svg"
                  className="absolute lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] inset-[0] object-cover rounded-radius16 w-[100%]"
                  alt="border"
                />
                <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[82%]">
                  <Column className="w-[100%]">
                    <Row className="items-start justify-end w-[100%]">
                      <Image
                        src="img_image_7.svg"
                        className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src="img_love_7.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] mb-[156px] lg:mb-[91px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Love"
                      />
                    </Row>
                  </Column>
                  <Text className="font-medium lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fast Food Resto`}</Text>
                  <Row className="items-center justify-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[73%]">
                    <Row className="items-center justify-between w-[21%]">
                      <Image
                        src="img_star1_7.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                        alt="Star1"
                      />
                      <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`5.0`}</Text>
                    </Row>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`1k+ Reviews`}</Text>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`2.97km`}</Text>
                  </Row>
                  <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[100%]">
                      <Column className="items-start w-[35%]">
                        <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Beef Burger`}</Text>
                        <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-red_400">
                          <span className="text-amber_600 font-poppins">
                            <>{`$`}</>
                          </span>
                          <span className="text-bluegray_900 font-poppins">
                            <>{`5.59`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src="img_button_5.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:my-[4px] object-contain rounded-radius16 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="button"
                      />
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] w-[100%]">
                <Image
                  src="img_border_8.svg"
                  className="absolute lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] inset-[0] object-cover rounded-radius16 w-[100%]"
                  alt="border"
                />
                <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[82%]">
                  <Column className="w-[100%]">
                    <Row className="items-start justify-end w-[100%]">
                      <Image
                        src="img_image_8.svg"
                        className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src="img_love_8.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] mb-[156px] lg:mb-[91px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Love"
                      />
                    </Row>
                  </Column>
                  <Text className="font-medium lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fast Food Resto`}</Text>
                  <Row className="items-center justify-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[73%]">
                    <Row className="items-center justify-between w-[21%]">
                      <Image
                        src="img_star1_8.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                        alt="Star1"
                      />
                      <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`5.0`}</Text>
                    </Row>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`1k+ Reviews`}</Text>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`2.97km`}</Text>
                  </Row>
                  <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[100%]">
                      <Column className="items-start w-[45%]">
                        <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Cheese Burger`}</Text>
                        <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-red_400">
                          <span className="text-amber_600 font-poppins">
                            <>{`$`}</>
                          </span>
                          <span className="text-bluegray_900 font-poppins">
                            <>{`5.59`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src="img_button_6.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:my-[4px] object-contain rounded-radius16 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="button"
                      />
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] w-[100%]">
                <Image
                  src="img_border_9.svg"
                  className="absolute lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] inset-[0] object-cover rounded-radius16 w-[100%]"
                  alt="border"
                />
                <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[82%]">
                  <Column className="w-[100%]">
                    <Row className="items-start justify-end w-[100%]">
                      <Image
                        src="img_image_9.svg"
                        className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src="img_love_9.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] mb-[156px] lg:mb-[91px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Love"
                      />
                    </Row>
                  </Column>
                  <Text className="font-medium lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fast Food Resto`}</Text>
                  <Row className="items-center justify-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[73%]">
                    <Row className="items-center justify-between w-[21%]">
                      <Image
                        src="img_star1_9.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                        alt="Star1"
                      />
                      <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`5.0`}</Text>
                    </Row>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`1k+ Reviews`}</Text>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`2.97km`}</Text>
                  </Row>
                  <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[100%]">
                      <Column className="items-start w-[44%]">
                        <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Double Burger`}</Text>
                        <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-red_400">
                          <span className="text-amber_600 font-poppins">
                            <>{`$`}</>
                          </span>
                          <span className="text-bluegray_900 font-poppins">
                            <>{`5.59`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src="img_button_7.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:my-[4px] object-contain rounded-radius16 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="button"
                      />
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] w-[100%]">
                <Image
                  src="img_border_10.svg"
                  className="absolute lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] inset-[0] object-cover rounded-radius16 w-[100%]"
                  alt="border"
                />
                <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[82%]">
                  <Column className="w-[100%]">
                    <Row className="items-start justify-end w-[100%]">
                      <Image
                        src="img_image_10.svg"
                        className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src="img_love_10.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] mb-[156px] lg:mb-[91px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Love"
                      />
                    </Row>
                  </Column>
                  <Text className="font-medium lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fast Food Resto`}</Text>
                  <Row className="items-center justify-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[73%]">
                    <Row className="items-center justify-between w-[21%]">
                      <Image
                        src="img_star1_10.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                        alt="Star1"
                      />
                      <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`5.0`}</Text>
                    </Row>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`1k+ Reviews`}</Text>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`2.97km`}</Text>
                  </Row>
                  <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[100%]">
                      <Column className="items-start w-[48%]">
                        <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Pepperoni Pizza`}</Text>
                        <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-red_400">
                          <span className="text-amber_600 font-poppins">
                            <>{`$`}</>
                          </span>
                          <span className="text-bluegray_900 font-poppins">
                            <>{`5.59`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src="img_button_8.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:my-[4px] object-contain rounded-radius16 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="button"
                      />
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] w-[100%]">
                <Image
                  src="img_border_11.svg"
                  className="absolute lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] inset-[0] object-cover rounded-radius16 w-[100%]"
                  alt="border"
                />
                <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[82%]">
                  <Column className="w-[100%]">
                    <Row className="items-start justify-end w-[100%]">
                      <Image
                        src="img_image_11.svg"
                        className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src="img_love_11.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] mb-[156px] lg:mb-[91px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Love"
                      />
                    </Row>
                  </Column>
                  <Text className="font-medium lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fast Food Resto`}</Text>
                  <Row className="items-center justify-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[73%]">
                    <Row className="items-center justify-between w-[21%]">
                      <Image
                        src="img_star1_11.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                        alt="Star1"
                      />
                      <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`5.0`}</Text>
                    </Row>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`1k+ Reviews`}</Text>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`2.97km`}</Text>
                  </Row>
                  <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[100%]">
                      <Column className="items-start w-[54%]">
                        <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Japanese Ramen`}</Text>
                        <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-red_400">
                          <span className="text-amber_600 font-poppins">
                            <>{`$`}</>
                          </span>
                          <span className="text-bluegray_900 font-poppins">
                            <>{`5.59`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src="img_button_9.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:my-[4px] object-contain rounded-radius16 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="button"
                      />
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] w-[100%]">
                <Image
                  src="img_border_12.svg"
                  className="absolute lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] inset-[0] object-cover rounded-radius16 w-[100%]"
                  alt="border"
                />
                <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[82%]">
                  <Column className="w-[100%]">
                    <Row className="items-start justify-end w-[100%]">
                      <Image
                        src="img_image_12.svg"
                        className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src="img_love_12.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] mb-[156px] lg:mb-[91px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Love"
                      />
                    </Row>
                  </Column>
                  <Text className="font-medium lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fast Food Resto`}</Text>
                  <Row className="items-center justify-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[73%]">
                    <Row className="items-center justify-between w-[21%]">
                      <Image
                        src="img_star1_12.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                        alt="Star1"
                      />
                      <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`5.0`}</Text>
                    </Row>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`1k+ Reviews`}</Text>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`2.97km`}</Text>
                  </Row>
                  <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[100%]">
                      <Column className="items-start w-[29%]">
                        <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fried Rice`}</Text>
                        <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-red_400">
                          <span className="text-amber_600 font-poppins">
                            <>{`$`}</>
                          </span>
                          <span className="text-bluegray_900 font-poppins">
                            <>{`5.59`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src="img_button_10.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:my-[4px] object-contain rounded-radius16 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="button"
                      />
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] w-[100%]">
                <Image
                  src="img_border_13.svg"
                  className="absolute lg:h-[245px] xl:h-[280px] 2xl:h-[315px] 3xl:h-[378px] h-[419px] inset-[0] object-cover rounded-radius16 w-[100%]"
                  alt="border"
                />
                <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[82%]">
                  <Column className="w-[100%]">
                    <Row className="items-start justify-end w-[100%]">
                      <Image
                        src="img_image_13.svg"
                        className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src="img_love_13.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] mb-[156px] lg:mb-[91px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] ml-[34px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Love"
                      />
                    </Row>
                  </Column>
                  <Text className="font-medium lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Fast Food Resto`}</Text>
                  <Row className="items-center justify-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] ml-[3px] mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[73%]">
                    <Row className="items-center justify-between w-[21%]">
                      <Image
                        src="img_star1_13.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                        alt="Star1"
                      />
                      <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`5.0`}</Text>
                    </Row>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`1k+ Reviews`}</Text>
                    <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`2.97km`}</Text>
                  </Row>
                  <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                    <Line className="bg-gray_300 h-[1px] w-[100%]" />
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[100%]">
                      <Column className="items-start w-[37%]">
                        <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Vegan Pizza`}</Text>
                        <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-red_400">
                          <span className="text-amber_600 font-poppins">
                            <>{`$`}</>
                          </span>
                          <span className="text-bluegray_900 font-poppins">
                            <>{`5.59`}</>
                          </span>
                        </Text>
                      </Column>
                      <Image
                        src="img_button_11.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:my-[4px] object-contain rounded-radius16 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="button"
                      />
                    </Row>
                  </Column>
                </Column>
              </Stack>
            </Grid>
            <footer className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] mt-[38px] w-[99%]">
              <Row className="items-center justify-between w-[100%]">
                <Text className="font-normal xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] my-[15px] lg:my-[8px] not-italic text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">
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
            </footer>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default FavoriteMenuPage;
