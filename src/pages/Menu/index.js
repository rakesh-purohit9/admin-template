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

const MenuPage = () => {
  const navigate = useNavigate();

  const handleNavigate38 = () => navigate("/dashboardrestaurant");
  const handleNavigate29 = () => navigate("/ordersrestaurant");
  const handleNavigate30 = () => navigate("/customerreviews");
  const handleNavigate31 = () => navigate("/settingsrestaurant");
  const handleNavigate32 = () => navigate("/");
  const handleNavigate2 = () => navigate("/");

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-poppins mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[100%]">
          <aside className="bg-white_A700 items-center w-[18%]">
            <Column className="">
              <Column className="items-center justify-start lg:mb-[296px] xl:mb-[338px] 2xl:mb-[381px] 3xl:mb-[457px] mb-[508px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] w-[73%]">
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
                  onClick={handleNavigate38}
                >
                  <Image
                    src={"images/img_restaurantloca_9.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="RestaurantLoca"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[auto]">{`Dashboard`}</Text>
                </Row>
                <Row className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]">
                  <Image
                    src={"images/img_bill_9.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Bill"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Menu`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate29}
                >
                  <Image
                    src={"images/img_deliveryscoote_9.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="DeliveryScoote"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Food Order`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate30}
                >
                  <Image
                    src={"images/img_review_9.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Review"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Reviews`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate31}
                >
                  <Image
                    src={"images/img_setting_9.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Setting"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Setting`}</Text>
                </Row>
                <Stack className="lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] lg:mt-[135px] xl:mt-[154px] 2xl:mt-[174px] 3xl:mt-[208px] mt-[232px] w-[100%]">
                  <div className="absolute bg-gradient  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-y-[0] left-[20%] right-[19%] rounded-radius32 shadow-bs1 w-[61%]"></div>
                  <Stack className="absolute bg-gradient1  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] rounded-radius16 w-[100%]">
                    <Image
                      src={"images/img_maskgroup_30.png"}
                      className="common-pointer absolute lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] object-cover w-[100%]"
                      onClick={handleNavigate32}
                      alt="MaskGroup"
                    />
                    <Column className="absolute items-start justify-start right-[6%] top-[11%] w-[82%]">
                      <Column className="w-[100%]">
                        <Stack className="lg:h-[54px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] h-[91px] w-[100%]">
                          <Image
                            src={"images/img_vector_13.svg"}
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
                        onClick={handleNavigate2}
                      >{`Upgrade`}</Button>
                    </Column>
                  </Stack>
                </Stack>
              </Column>
            </Column>
          </aside>
          <Column className="items-center lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mr-[22px] xl:mr-[26px] 2xl:mr-[29px] 3xl:mr-[35px] mr-[39px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[78%]">
            <Row className="items-start justify-between w-[100%]">
              <Text className="font-bold lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] text-bluegray_900 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[auto]">{`Menu`}</Text>
              <Image
                src={"images/img_menu_9.svg"}
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] mr-[1px] object-contain w-[19%]"
                alt="menu"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] mt-[26px] w-[100%]">
              <div className=" input-wrap">
                <Image
                  src={"images/img_xmlid_223_6.svg"}
                  className="absolute cursor-pointer h-[24px] left-[28px] lg:h-[14px] lg:left-[16px] xl:h-[17px] xl:left-[18px] 2xl:h-[19px] 2xl:left-[21px] 3xl:h-[22px] 3xl:left-[25px] my-[auto] inset-y-[0]"
                  alt="XMLID 223"
                />
                {inputvalue?.length > 0 ? (
                  <Image
                    onClick={() => setInputvalue("")}
                    src={"images/close2.svg"}
                    className="absolute cursor-pointer h-[24px] right-[22px] lg:h-[14px] lg:right-[12px] xl:h-[17px] xl:right-[14px] 2xl:h-[19px] 2xl:right-[16px] 3xl:h-[22px] 3xl:right-[19px] my-[auto] inset-y-[0]"
                    alt="Vector"
                  />
                ) : (
                  ""
                )}
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="bg-white_A700 font-normal not-italic lg:pl-[46px] xl:pl-[53px] 2xl:pl-[60px] 3xl:pl-[72px] pl-[80px] lg:pr-[12px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] pr-[22px] lg:py-[11px] xl:py-[13px] 2xl:py-[14px] 3xl:py-[17px] py-[19.545px] rounded-radius16 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  name="Group180"
                  placeholder={`Search`}
                ></Input>
              </div>
              <Button className="bg-amber_600 font-medium mr-[1px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] rounded-radius16 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[14%]">{`Add New Menu`}</Button>
            </Row>
            <Row className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Text className="font-bold text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[auto]">{`Category`}</Text>
              <Text className="font-normal xl:mb-[3px] 3xl:mb-[4px] mb-[5px] 3xl:ml-[1149px] ml-[1277px] lg:ml-[744px] xl:ml-[851px] 2xl:ml-[958px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] not-italic text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`View all`}</Text>
              <Image
                src={"images/img_chevrondown_10.svg"}
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                alt="chevrondown"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
              <Column className="bg-white_A700 items-center lg:py-[17px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] py-[30.5px] rounded-radius16 w-[12%]">
                <Image
                  src={"images/img_baked_1.svg"}
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  alt="Baked"
                />
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[auto]">{`Bakery`}</Text>
              </Column>
              <Column className="bg-white_A700 items-center lg:py-[17px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] py-[30.5px] rounded-radius16 w-[12%]">
                <Image
                  src={"images/img_burger_1.svg"}
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  alt="Burger"
                />
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[auto]">{`Burger`}</Text>
              </Column>
              <Column className="bg-white_A700 items-center lg:py-[17px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] py-[30.5px] rounded-radius16 w-[12%]">
                <Image
                  src={"images/img_coffee_1.svg"}
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  alt="Coffee"
                />
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[auto]">{`Beverage`}</Text>
              </Column>
              <Column className="bg-white_A700 items-center lg:py-[17px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] py-[30.5px] rounded-radius16 w-[12%]">
                <Image
                  src={"images/img_chicken_1.svg"}
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  alt="Chicken"
                />
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[auto]">{`Chicken`}</Text>
              </Column>
              <Column className="bg-white_A700 items-center lg:py-[17px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] py-[30.5px] rounded-radius16 w-[12%]">
                <Image
                  src={"images/img_fast_1.svg"}
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  alt="Fast"
                />
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[auto]">{`Pizza`}</Text>
              </Column>
              <Column className="bg-white_A700 items-center lg:py-[17px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] py-[30.5px] rounded-radius16 w-[12%]">
                <Image
                  src={"images/img_fish_1.svg"}
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  alt="Fish"
                />
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[auto]">{`Seafood`}</Text>
              </Column>
              <Column className="bg-white_A700 items-center lg:py-[17px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] py-[30.5px] rounded-radius16 w-[12%]">
                <Image
                  src={"images/img_dessert.svg"}
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  alt="Dessert"
                />
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[auto]">{`Dessert`}</Text>
              </Column>
              <Column className="bg-white_A700 items-center lg:py-[17px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] py-[30.5px] rounded-radius16 w-[12%]">
                <Image
                  src={"images/img_chinese.svg"}
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  alt="Chinese"
                />
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 w-[auto]">{`Noodle`}</Text>
              </Column>
            </Row>
            <Column className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Row className="items-center justify-start w-[100%]">
                <Text className="font-bold text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[auto]">{`Popular This Week`}</Text>
                <Text className="font-normal xl:mb-[3px] 3xl:mb-[4px] mb-[5px] 3xl:ml-[1050px] ml-[1166px] lg:ml-[680px] xl:ml-[777px] 2xl:ml-[875px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] not-italic text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`View all`}</Text>
                <Image
                  src={"images/img_chevrondown_11.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  alt="chevrondown"
                />
              </Row>
              <List
                className="xl:gap-[11px] 2xl:gap-[12px] 3xl:gap-[15px] gap-[17px] lg:gap-[9px] grid grid-cols-4 min-h-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                orientation="horizontal"
              >
                <Stack className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] w-[100%]">
                  <Image
                    src={"images/img_border_14.svg"}
                    className="absolute lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] inset-[0] object-cover rounded-radius16 w-[100%]"
                    alt="border"
                  />
                  <Column className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[87%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Image
                          src={"images/img_image_20.svg"}
                          className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                          alt="image"
                        />
                        <Column className="items-start justify-start lg:mb-[5px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] mb-[9px] w-[64%]">
                          <Column className="w-[100%]">
                            <Row className="items-start justify-between w-[100%]">
                              <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Fish Burger`}</Text>
                              <Image
                                src={"images/img_dots_10.svg"}
                                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                alt="Dots"
                              />
                            </Row>
                          </Column>
                          <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400 w-[auto]">
                            <span className="text-amber_600 font-poppins">
                              <>{`$`}</>
                            </span>
                            <span className="text-bluegray_900 font-poppins">
                              <>{`5.59`}</>
                            </span>
                          </Text>
                          <Row className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[89%]">
                            <Row className="items-center justify-between w-[25%]">
                              <Image
                                src={"images/img_star1_15.svg"}
                                className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                                alt="Star1"
                              />
                              <Text className="font-normal lg:h-[13px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] h-[21px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`5.0`}</Text>
                            </Row>
                            <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                            <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`1k+ User Reviews`}</Text>
                          </Row>
                        </Column>
                      </Row>
                    </Column>
                    <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...`}</Text>
                  </Column>
                </Stack>
                <Stack className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] w-[100%]">
                  <Image
                    src={"images/img_border_15.svg"}
                    className="absolute lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] inset-[0] object-cover rounded-radius16 w-[100%]"
                    alt="border"
                  />
                  <Column className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[87%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Image
                          src={"images/img_image_21.svg"}
                          className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                          alt="image"
                        />
                        <Column className="items-start justify-start lg:mb-[5px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] mb-[9px] w-[64%]">
                          <Column className="w-[100%]">
                            <Row className="items-start justify-between w-[100%]">
                              <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Double Burger`}</Text>
                              <Image
                                src={"images/img_dots_11.svg"}
                                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                alt="Dots"
                              />
                            </Row>
                          </Column>
                          <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400 w-[auto]">
                            <span className="text-amber_600 font-poppins">
                              <>{`$`}</>
                            </span>
                            <span className="text-bluegray_900 font-poppins">
                              <>{`5.59`}</>
                            </span>
                          </Text>
                          <Row className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[89%]">
                            <Row className="items-center justify-between w-[25%]">
                              <Image
                                src={"images/img_star1_16.svg"}
                                className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                                alt="Star1"
                              />
                              <Text className="font-normal lg:h-[13px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] h-[21px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`5.0`}</Text>
                            </Row>
                            <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                            <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`1k+ User Reviews`}</Text>
                          </Row>
                        </Column>
                      </Row>
                    </Column>
                    <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...`}</Text>
                  </Column>
                </Stack>
                <Stack className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] w-[100%]">
                  <Image
                    src={"images/img_border_16.svg"}
                    className="absolute lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] inset-[0] object-cover rounded-radius16 w-[100%]"
                    alt="border"
                  />
                  <Column className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[87%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Image
                          src={"images/img_image_22.svg"}
                          className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                          alt="image"
                        />
                        <Column className="items-start justify-start lg:mb-[5px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] mb-[9px] w-[64%]">
                          <Column className="w-[100%]">
                            <Row className="items-start justify-between w-[100%]">
                              <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Beef Burger`}</Text>
                              <Image
                                src={"images/img_dots_12.svg"}
                                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                alt="Dots"
                              />
                            </Row>
                          </Column>
                          <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400 w-[auto]">
                            <span className="text-amber_600 font-poppins">
                              <>{`$`}</>
                            </span>
                            <span className="text-bluegray_900 font-poppins">
                              <>{`5.59`}</>
                            </span>
                          </Text>
                          <Row className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[89%]">
                            <Row className="items-center justify-between w-[25%]">
                              <Image
                                src={"images/img_star1_17.svg"}
                                className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                                alt="Star1"
                              />
                              <Text className="font-normal lg:h-[13px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] h-[21px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`5.0`}</Text>
                            </Row>
                            <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                            <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`1k+ User Reviews`}</Text>
                          </Row>
                        </Column>
                      </Row>
                    </Column>
                    <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...`}</Text>
                  </Column>
                </Stack>
                <Stack className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] w-[100%]">
                  <Image
                    src={"images/img_border_17.svg"}
                    className="absolute lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] h-[200px] inset-[0] object-cover rounded-radius16 w-[100%]"
                    alt="border"
                  />
                  <Column className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[87%]">
                    <Column className="w-[100%]">
                      <Row className="items-start justify-between w-[100%]">
                        <Image
                          src={"images/img_image_23.svg"}
                          className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] h-[96px] object-contain lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px] w-[96px]"
                          alt="image"
                        />
                        <Column className="items-start justify-start lg:mb-[5px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] mb-[9px] w-[64%]">
                          <Column className="w-[100%]">
                            <Row className="items-start justify-between w-[100%]">
                              <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Cheese Burger`}</Text>
                              <Image
                                src={"images/img_dots_13.svg"}
                                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:mb-[1px] 3xl:mb-[2px] 2xl:mb-[2px] xl:mb-[2px] mb-[3px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                alt="Dots"
                              />
                            </Row>
                          </Column>
                          <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-red_400 w-[auto]">
                            <span className="text-amber_600 font-poppins">
                              <>{`$`}</>
                            </span>
                            <span className="text-bluegray_900 font-poppins">
                              <>{`5.59`}</>
                            </span>
                          </Text>
                          <Row className="items-center justify-start mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[89%]">
                            <Row className="items-center justify-between w-[25%]">
                              <Image
                                src={"images/img_star1_18.svg"}
                                className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                                alt="Star1"
                              />
                              <Text className="font-normal lg:h-[13px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] h-[21px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`5.0`}</Text>
                            </Row>
                            <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                            <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`1k+ User Reviews`}</Text>
                          </Row>
                        </Column>
                      </Row>
                    </Column>
                    <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...`}</Text>
                  </Column>
                </Stack>
              </List>
            </Column>
            <Column className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Row className="items-center justify-start w-[100%]">
                <Text className="font-bold text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[auto]">{`Best Seller`}</Text>
                <Text className="font-normal xl:mb-[3px] 3xl:mb-[4px] mb-[5px] 3xl:ml-[1140px] ml-[1266px] lg:ml-[738px] xl:ml-[844px] 2xl:ml-[950px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] not-italic text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`View all`}</Text>
                <Image
                  src={"images/img_chevrondown_12.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  alt="chevrondown"
                />
              </Row>
              <List
                className="lg:gap-[14px] xl:gap-[16px] 2xl:gap-[18px] 3xl:gap-[21px] gap-[24px] grid grid-cols-6 min-h-[auto] lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] mr-[8px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[99%]"
                orientation="horizontal"
              >
                <Stack className="lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] w-[100%]">
                  <Image
                    src={"images/img_border_18.svg"}
                    className="absolute lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] inset-[0] object-cover rounded-radius16 w-[100%]"
                    alt="border"
                  />
                  <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[79%]">
                    <Stack className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] mx-[auto] lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]">
                      <Image
                        src={"images/img_image_24.svg"}
                        className="absolute lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] inset-[0] object-cover lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src={"images/img_dots_14.svg"}
                        className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain right-[0] top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Dots"
                      />
                    </Stack>
                    <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] text-bluegray_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[auto]">{`Pepperoni Pizza`}</Text>
                    <Text className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-red_400 w-[auto]">
                      <span className="text-amber_600 font-poppins">
                        <>{`$`}</>
                      </span>
                      <span className="text-bluegray_900 font-poppins">
                        <>{`5.59`}</>
                      </span>
                    </Text>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[87%]">
                      <Text className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Sold 1k`}</Text>
                      <Line className="bg-gray_300 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] rotate-[90deg] w-[1px]" />
                      <Text className="font-semibold lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-light_green_500 w-[auto]">{`+ 15%`}</Text>
                      <Image
                        src={"images/img_arrow_3.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="arrow"
                      />
                    </Row>
                  </Column>
                </Stack>
                <Stack className="lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] w-[100%]">
                  <Image
                    src={"images/img_border_19.svg"}
                    className="absolute lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] inset-[0] object-cover rounded-radius16 w-[100%]"
                    alt="border"
                  />
                  <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[79%]">
                    <Stack className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] mx-[auto] lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]">
                      <Image
                        src={"images/img_image_25.svg"}
                        className="absolute lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] inset-[0] object-cover lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src={"images/img_dots_15.svg"}
                        className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain right-[0] top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Dots"
                      />
                    </Stack>
                    <Text className="font-medium ml-[10px] 2xl:ml-[7px] 3xl:ml-[9px] 2xl:mr-[6px] 3xl:mr-[8px] mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:mx-[5px] xl:mx-[6px] text-bluegray_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[auto]">{`Japanese Ramen`}</Text>
                    <Text className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-red_400 w-[auto]">
                      <span className="text-amber_600 font-poppins">
                        <>{`$`}</>
                      </span>
                      <span className="text-bluegray_900 font-poppins">
                        <>{`5.59`}</>
                      </span>
                    </Text>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[87%]">
                      <Text className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Sold 1k`}</Text>
                      <Line className="bg-gray_300 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] rotate-[90deg] w-[1px]" />
                      <Text className="font-semibold lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-light_green_500 w-[auto]">{`+ 15%`}</Text>
                      <Image
                        src={"images/img_arrow_4.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="arrow"
                      />
                    </Row>
                  </Column>
                </Stack>
                <Stack className="lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] w-[100%]">
                  <Image
                    src={"images/img_border_20.svg"}
                    className="absolute lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] inset-[0] object-cover rounded-radius16 w-[100%]"
                    alt="border"
                  />
                  <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[79%]">
                    <Stack className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] mx-[auto] lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]">
                      <Image
                        src={"images/img_image_26.svg"}
                        className="absolute lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] inset-[0] object-cover lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src={"images/img_dots_16.svg"}
                        className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain right-[0] top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Dots"
                      />
                    </Stack>
                    <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] text-bluegray_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[auto]">{`Fried Rice`}</Text>
                    <Text className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-red_400 w-[auto]">
                      <span className="text-amber_600 font-poppins">
                        <>{`$`}</>
                      </span>
                      <span className="text-bluegray_900 font-poppins">
                        <>{`5.59`}</>
                      </span>
                    </Text>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[87%]">
                      <Text className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Sold 1k`}</Text>
                      <Line className="bg-gray_300 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] rotate-[90deg] w-[1px]" />
                      <Text className="font-semibold lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-light_green_500 w-[auto]">{`+ 15%`}</Text>
                      <Image
                        src={"images/img_arrow_5.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="arrow"
                      />
                    </Row>
                  </Column>
                </Stack>
                <Stack className="lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] w-[100%]">
                  <Image
                    src={"images/img_border_21.svg"}
                    className="absolute lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] inset-[0] object-cover rounded-radius16 w-[100%]"
                    alt="border"
                  />
                  <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[79%]">
                    <Stack className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] mx-[auto] lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]">
                      <Image
                        src={"images/img_image_27.svg"}
                        className="absolute lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] inset-[0] object-cover lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src={"images/img_dots_17.svg"}
                        className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain right-[0] top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Dots"
                      />
                    </Stack>
                    <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] text-bluegray_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[auto]">{`Vegan Pizza`}</Text>
                    <Text className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-red_400 w-[auto]">
                      <span className="text-amber_600 font-poppins">
                        <>{`$`}</>
                      </span>
                      <span className="text-bluegray_900 font-poppins">
                        <>{`5.59`}</>
                      </span>
                    </Text>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[87%]">
                      <Text className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Sold 1k`}</Text>
                      <Line className="bg-gray_300 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] rotate-[90deg] w-[1px]" />
                      <Text className="font-semibold lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-light_green_500 w-[auto]">{`+ 15%`}</Text>
                      <Image
                        src={"images/img_arrow_6.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="arrow"
                      />
                    </Row>
                  </Column>
                </Stack>
                <Stack className="lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] w-[100%]">
                  <Image
                    src={"images/img_border_22.svg"}
                    className="absolute lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] inset-[0] object-cover rounded-radius16 w-[100%]"
                    alt="border"
                  />
                  <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[79%]">
                    <Stack className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] mx-[auto] lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]">
                      <Image
                        src={"images/img_image_28.svg"}
                        className="absolute lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] inset-[0] object-cover lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src={"images/img_dots_18.svg"}
                        className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain right-[0] top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Dots"
                      />
                    </Stack>
                    <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] text-bluegray_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[auto]">{`Beef Burger`}</Text>
                    <Text className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-red_400 w-[auto]">
                      <span className="text-amber_600 font-poppins">
                        <>{`$`}</>
                      </span>
                      <span className="text-bluegray_900 font-poppins">
                        <>{`5.59`}</>
                      </span>
                    </Text>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[87%]">
                      <Text className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Sold 1k`}</Text>
                      <Line className="bg-gray_300 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] rotate-[90deg] w-[1px]" />
                      <Text className="font-semibold lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-light_green_500 w-[auto]">{`+ 15%`}</Text>
                      <Image
                        src={"images/img_arrow_7.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="arrow"
                      />
                    </Row>
                  </Column>
                </Stack>
                <Stack className="lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] w-[100%]">
                  <Image
                    src={"images/img_border_23.svg"}
                    className="absolute lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] inset-[0] object-cover rounded-radius16 w-[100%]"
                    alt="border"
                  />
                  <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[79%]">
                    <Stack className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] mx-[auto] lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]">
                      <Image
                        src={"images/img_image_29.svg"}
                        className="absolute lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] inset-[0] object-cover lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src={"images/img_dots_19.svg"}
                        className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] object-contain right-[0] top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Dots"
                      />
                    </Stack>
                    <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] text-bluegray_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 w-[auto]">{`Fish Burger`}</Text>
                    <Text className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] mx-[auto] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-red_400 w-[auto]">
                      <span className="text-amber_600 font-poppins">
                        <>{`$`}</>
                      </span>
                      <span className="text-bluegray_900 font-poppins">
                        <>{`5.59`}</>
                      </span>
                    </Text>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] w-[87%]">
                      <Text className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Sold 1k`}</Text>
                      <Line className="bg-gray_300 lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] rotate-[90deg] w-[1px]" />
                      <Text className="font-semibold lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-light_green_500 w-[auto]">{`+ 15%`}</Text>
                      <Image
                        src={"images/img_arrow_8.svg"}
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="arrow"
                      />
                    </Row>
                  </Column>
                </Stack>
              </List>
            </Column>
            <Column className="items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Row className="items-center justify-start w-[100%]">
                <Text className="font-bold text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left w-[auto]">{`Promo`}</Text>
                <Text className="font-normal xl:mb-[3px] 3xl:mb-[4px] mb-[5px] 3xl:ml-[1181px] ml-[1312px] lg:ml-[765px] xl:ml-[875px] 2xl:ml-[984px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] not-italic text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`View all`}</Text>
                <Image
                  src={"images/img_chevrondown_13.svg"}
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                  alt="chevrondown"
                />
              </Row>
              <List
                className="xl:gap-[10px] 2xl:gap-[11px] 3xl:gap-[13px] gap-[15px] lg:gap-[8px] grid grid-cols-4 min-h-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
                orientation="horizontal"
              >
                <Stack className="lg:h-[112px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] h-[192px] w-[100%]">
                  <Stack className="absolute lg:h-[112px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] h-[192px] inset-[0] w-[100%]">
                    <Image
                      src={"images/img_border_24.svg"}
                      className="absolute lg:h-[112px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] h-[192px] inset-[0] object-cover rounded-radius16 w-[100%]"
                      alt="border"
                    />
                    <Button className="absolute bg-red_400 font-normal left-[0] not-italic 2xl:pb-[2px] xl:pb-[2px] pb-[3.545px] 3xl:pb-[3px] 2xl:pt-[3px] xl:pt-[3px] pt-[4.545px] 3xl:pt-[4px] lg:py-[2px] rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 top-[13%] w-[27%]">{`15% Off`}</Button>
                  </Stack>
                  <Row className="absolute h-[max-content] inset-[0] items-end justify-center m-[auto] w-[87%]">
                    <Column className="lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] w-[47%]">
                      <Column className="items-start justify-start w-[100%]">
                        <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Fish Burger`}</Text>
                        <Column className="xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] w-[100%]">
                          <Row className="items-center justify-start w-[100%]">
                            <Text className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-red_400 w-[auto]">
                              <span className="text-amber_600 font-poppins">
                                <>{`$`}</>
                              </span>
                              <span className="text-bluegray_900 font-poppins">
                                <>{`3.59`}</>
                              </span>
                            </Text>
                            <Text className="font-medium line-through xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$5.59`}</Text>
                          </Row>
                        </Column>
                      </Column>
                      <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]">
                        <Row className="items-center justify-between w-[31%]">
                          <Image
                            src={"images/img_star1_19.svg"}
                            className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                            alt="Star1"
                          />
                          <Text className="font-normal lg:h-[13px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] h-[21px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`5.0`}</Text>
                        </Row>
                        <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                        <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`1k+ Reviews`}</Text>
                      </Row>
                    </Column>
                    <Image
                      src={"images/img_image_30.svg"}
                      className="2xl:h-[109px] 3xl:h-[130px] h-[144px] lg:h-[84px] xl:h-[97px] object-contain 2xl:w-[108px] 3xl:w-[129px] w-[144px] lg:w-[84px] xl:w-[96px]"
                      alt="image"
                    />
                  </Row>
                </Stack>
                <Stack className="lg:h-[112px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] h-[192px] w-[100%]">
                  <Stack className="absolute lg:h-[112px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] h-[192px] inset-[0] w-[100%]">
                    <Image
                      src={"images/img_border_25.svg"}
                      className="absolute lg:h-[112px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] h-[192px] inset-[0] object-cover rounded-radius16 w-[100%]"
                      alt="border"
                    />
                    <Button className="absolute bg-red_400 font-normal left-[0] not-italic 2xl:pb-[2px] xl:pb-[2px] pb-[3.545px] 3xl:pb-[3px] 2xl:pt-[3px] xl:pt-[3px] pt-[4.545px] 3xl:pt-[4px] lg:py-[2px] rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 top-[13%] w-[27%]">{`15% Off`}</Button>
                  </Stack>
                  <Row className="absolute h-[max-content] inset-[0] items-end justify-center m-[auto] w-[87%]">
                    <Column className="lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] w-[47%]">
                      <Column className="items-start justify-start w-[100%]">
                        <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Double Burger`}</Text>
                        <Column className="xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] w-[100%]">
                          <Row className="items-center justify-start w-[100%]">
                            <Text className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-red_400 w-[auto]">
                              <span className="text-amber_600 font-poppins">
                                <>{`$`}</>
                              </span>
                              <span className="text-bluegray_900 font-poppins">
                                <>{`3.59`}</>
                              </span>
                            </Text>
                            <Text className="font-medium line-through xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$5.59`}</Text>
                          </Row>
                        </Column>
                      </Column>
                      <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]">
                        <Row className="items-center justify-between w-[31%]">
                          <Image
                            src={"images/img_star1_20.svg"}
                            className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                            alt="Star1"
                          />
                          <Text className="font-normal lg:h-[13px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] h-[21px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`5.0`}</Text>
                        </Row>
                        <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                        <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`1k+ Reviews`}</Text>
                      </Row>
                    </Column>
                    <Image
                      src={"images/img_image_31.svg"}
                      className="2xl:h-[109px] 3xl:h-[130px] h-[144px] lg:h-[84px] xl:h-[97px] object-contain 2xl:w-[108px] 3xl:w-[129px] w-[144px] lg:w-[84px] xl:w-[96px]"
                      alt="image"
                    />
                  </Row>
                </Stack>
                <Stack className="lg:h-[112px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] h-[192px] w-[100%]">
                  <Stack className="absolute lg:h-[112px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] h-[192px] inset-[0] w-[100%]">
                    <Image
                      src={"images/img_border_26.svg"}
                      className="absolute lg:h-[112px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] h-[192px] inset-[0] object-cover rounded-radius16 w-[100%]"
                      alt="border"
                    />
                    <Button className="absolute bg-red_400 font-normal left-[0] not-italic 2xl:pb-[2px] xl:pb-[2px] pb-[3.545px] 3xl:pb-[3px] 2xl:pt-[3px] xl:pt-[3px] pt-[4.545px] 3xl:pt-[4px] lg:py-[2px] rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 top-[13%] w-[27%]">{`15% Off`}</Button>
                  </Stack>
                  <Row className="absolute h-[max-content] inset-[0] items-end justify-center m-[auto] w-[87%]">
                    <Column className="lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] w-[47%]">
                      <Column className="items-start justify-start w-[100%]">
                        <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Beef Burger`}</Text>
                        <Column className="xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] w-[100%]">
                          <Row className="items-center justify-start w-[100%]">
                            <Text className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-red_400 w-[auto]">
                              <span className="text-amber_600 font-poppins">
                                <>{`$`}</>
                              </span>
                              <span className="text-bluegray_900 font-poppins">
                                <>{`3.59`}</>
                              </span>
                            </Text>
                            <Text className="font-medium line-through xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$5.59`}</Text>
                          </Row>
                        </Column>
                      </Column>
                      <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]">
                        <Row className="items-center justify-between w-[31%]">
                          <Image
                            src={"images/img_star1_21.svg"}
                            className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                            alt="Star1"
                          />
                          <Text className="font-normal lg:h-[13px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] h-[21px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`5.0`}</Text>
                        </Row>
                        <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                        <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`1k+ Reviews`}</Text>
                      </Row>
                    </Column>
                    <Image
                      src={"images/img_image_32.svg"}
                      className="2xl:h-[109px] 3xl:h-[130px] h-[144px] lg:h-[84px] xl:h-[97px] object-contain 2xl:w-[108px] 3xl:w-[129px] w-[144px] lg:w-[84px] xl:w-[96px]"
                      alt="image"
                    />
                  </Row>
                </Stack>
                <Stack className="lg:h-[112px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] h-[192px] w-[100%]">
                  <Stack className="absolute lg:h-[112px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] h-[192px] inset-[0] w-[100%]">
                    <Image
                      src={"images/img_border_27.svg"}
                      className="absolute lg:h-[112px] xl:h-[129px] 2xl:h-[145px] 3xl:h-[173px] h-[192px] inset-[0] object-cover rounded-radius16 w-[100%]"
                      alt="border"
                    />
                    <Button className="absolute bg-red_400 font-normal left-[0] not-italic 2xl:pb-[2px] xl:pb-[2px] pb-[3.545px] 3xl:pb-[3px] 2xl:pt-[3px] xl:pt-[3px] pt-[4.545px] 3xl:pt-[4px] lg:py-[2px] rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 top-[13%] w-[27%]">{`15% Off`}</Button>
                  </Stack>
                  <Row className="absolute h-[max-content] inset-[0] items-end justify-center m-[auto] w-[87%]">
                    <Column className="lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] mt-[48px] w-[47%]">
                      <Column className="items-start justify-start w-[100%]">
                        <Text className="font-medium mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Cheese Burger`}</Text>
                        <Column className="xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] mt-[4px] w-[100%]">
                          <Row className="items-center justify-start w-[100%]">
                            <Text className="font-bold lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left text-red_400 w-[auto]">
                              <span className="text-amber_600 font-poppins">
                                <>{`$`}</>
                              </span>
                              <span className="text-bluegray_900 font-poppins">
                                <>{`3.59`}</>
                              </span>
                            </Text>
                            <Text className="font-medium line-through xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`$5.59`}</Text>
                          </Row>
                        </Column>
                      </Column>
                      <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]">
                        <Row className="items-center justify-between w-[31%]">
                          <Image
                            src={"images/img_star1_22.svg"}
                            className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] h-[16px] 2xl:my-[1px] xl:my-[1px] lg:my-[1px] my-[2.5px] 3xl:my-[2px] object-contain xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] w-[16px] lg:w-[9px]"
                            alt="Star1"
                          />
                          <Text className="font-normal lg:h-[13px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] h-[21px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`5.0`}</Text>
                        </Row>
                        <div className="bg-gray_400 xl:h-[3px] lg:h-[3px] h-[4px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] my-[8.5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px] w-[4px]"></div>
                        <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`1k+ Reviews`}</Text>
                      </Row>
                    </Column>
                    <Image
                      src={"images/img_image_33.svg"}
                      className="2xl:h-[109px] 3xl:h-[130px] h-[144px] lg:h-[84px] xl:h-[97px] object-contain 2xl:w-[108px] 3xl:w-[129px] w-[144px] lg:w-[84px] xl:w-[96px]"
                      alt="image"
                    />
                  </Row>
                </Stack>
              </List>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default MenuPage;
