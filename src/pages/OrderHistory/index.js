import React from "react";

import { useNavigate } from "react-router-dom";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { SelectBox } from "components/SelectBox";
import { CheckBox } from "components/CheckBox";
import { Line } from "components/Line";

const OrderHistoryPage = () => {
  const navigate = useNavigate();

  const handleNavigate62 = () => navigate("/");
  const handleNavigate63 = () => navigate("/foodorder");
  const handleNavigate52 = () => navigate("/favoritemenu");
  const handleNavigate53 = () => navigate("/chat");
  const handleNavigate54 = () => navigate("/bills");
  const handleNavigate55 = () => navigate("/settingscustomer");
  const handleNavigate26 = () => navigate("/dashboardrestaurant");

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-poppins mx-[auto] w-[100%]">
        <Row className="items-center justify-start w-[100%]">
          <aside className="bg-white_A700 items-center w-[18%]">
            <Column className="">
              <Column className="items-center justify-start 3xl:mb-[118px] mb-[132px] lg:mb-[77px] xl:mb-[88px] 2xl:mb-[99px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] w-[73%]">
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
                  onClick={handleNavigate62}
                >
                  <Image
                    src={"images/img_restaurantloca_4.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="RestaurantLoca"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Dashboard`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate63}
                >
                  <Image
                    src={"images/img_deliveryscoote_4.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="DeliveryScoote"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Food Order`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate52}
                >
                  <Image
                    src={"images/img_review_4.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Review"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Favorite`}</Text>
                </Row>
                <Row
                  className="common-pointer bg-amber_600 items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate53}
                >
                  <Image
                    src={"images/img_orderdiscussio_4.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="OrderDiscussio"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 w-[auto]">{`Message`}</Text>
                </Row>
                <Row className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]">
                  <Image
                    src={"images/img_24hourfoodde_4.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="24HourFoodDe"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Order History`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate54}
                >
                  <Image
                    src={"images/img_bill_4.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Bill"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Bills`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate55}
                >
                  <Image
                    src={"images/img_setting_4.svg"}
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Setting"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left w-[auto]">{`Setting`}</Text>
                </Row>
                <Stack className="lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[100%]">
                  <div className="absolute bg-gradient  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-y-[0] left-[20%] right-[19%] rounded-radius32 shadow-bs1 w-[61%]"></div>
                  <Stack className="absolute bg-gradient1  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] rounded-radius16 w-[100%]">
                    <Image
                      src={"images/img_maskgroup_23.png"}
                      className="common-pointer absolute lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] object-cover w-[100%]"
                      onClick={handleNavigate26}
                      alt="MaskGroup"
                    />
                    <Column className="absolute items-start justify-start right-[6%] top-[11%] w-[82%]">
                      <Column className="w-[100%]">
                        <Stack className="lg:h-[54px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] h-[91px] w-[100%]">
                          <Image
                            src={"images/img_vector_4.svg"}
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
          <Column className="lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[78%]">
            <Row className="items-start justify-between w-[100%]">
              <Text className="font-bold lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] text-bluegray_900 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left w-[auto]">{`Order History`}</Text>
              <Image
                src={"images/img_menu_4.svg"}
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] object-contain w-[19%]"
                alt="menu"
              />
            </Row>
            <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <div className=" input-wrap">
                <Image
                  src={"images/img_xmlid_223_3.svg"}
                  className="absolute cursor-pointer h-[24px] left-[28px] lg:h-[14px] lg:left-[16px] xl:h-[17px] xl:left-[18px] 2xl:h-[19px] 2xl:left-[21px] 3xl:h-[22px] 3xl:left-[25px] my-[auto] inset-y-[0]"
                  alt="XMLID 223"
                />
                {inputvalue?.length > 0 ? (
                  <Image
                    onClick={() => setInputvalue("")}
                    src={"images/close1.svg"}
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
                  name="Group85"
                  placeholder={`Search`}
                ></Input>
              </div>
              <div className="bg-transparent w-[11%] input-wrap">
                <Image
                  src={"images/img_vector_5.svg"}
                  className="absolute right-[32.56006px] bg-transparent lg:right-[18px] xl:right-[21px] 2xl:right-[24px] 3xl:right-[29px] my-[auto] inset-y-[0]"
                  alt="Vector"
                />
                <SelectBox
                  className="bg-white_A700 font-normal not-italic lg:pl-[14px] xl:pl-[17px] 2xl:pl-[19px] 3xl:pl-[22px] pl-[25.5px] lg:pr-[49px] xl:pr-[56px] 2xl:pr-[63px] 3xl:pr-[76px] pr-[85.00005999999999px] lg:py-[10px] xl:py-[12px] 2xl:py-[13px] 3xl:py-[16px] py-[18.045px] rounded-radius16 text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[100%]"
                  placeholderClassName=""
                  name="Group86"
                  placeholder={`Select`}
                  isSearchable={true}
                  isMulti={false}
                ></SelectBox>
              </div>
            </Row>
            <Column className="bg-white_A700 items-center justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Stack className="h-[101px] lg:h-[59px] xl:h-[68px] 2xl:h-[76px] 3xl:h-[91px] w-[100%]">
                  <Column className="absolute bg-white_A700 inset-[0] items-center justify-start lg:py-[21px] xl:py-[24px] 2xl:py-[27px] 3xl:py-[33px] py-[37px] w-[100%]">
                    <CheckBox
                      className="font-semibold lg:mx-[18px] xl:mx-[21px] 2xl:mx-[24px] 3xl:mx-[28px] mx-[32px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[7%]"
                      inputClassName="2xl:h-[21px] 2xl:w-[20px] 3xl:h-[25px] 3xl:w-[24px] border-bw3 border-gray_300 border-solid h-[27px] lg:h-[16px] lg:w-[15px] rounded-radius4 w-[27px] xl:h-[19px] xl:w-[18px] mr-[5px]"
                      name="Group87"
                      label={`Menu`}
                    ></CheckBox>
                  </Column>
                  <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[50%]">
                    <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Date`}</Text>
                    <Text className="font-semibold xl:ml-[104px] 2xl:ml-[117px] 3xl:ml-[140px] ml-[156px] lg:ml-[91px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Address`}</Text>
                    <Text className="font-semibold lg:ml-[157px] xl:ml-[180px] 2xl:ml-[202px] 3xl:ml-[243px] ml-[270px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Total`}</Text>
                    <Text className="font-semibold lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] ml-[89px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Status`}</Text>
                  </Row>
                </Stack>
                <Line className="bg-gray_100 h-[2px] 3xl:mr-[11px] mr-[13px] lg:mr-[7px] xl:mr-[8px] 2xl:mr-[9px] rounded-radius30 w-[99%]" />
              </Column>
              <Column className="w-[100%]">
                <Row className="bg-white_A700 items-center justify-start rounded-radius1 w-[100%]">
                  <CheckBox
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[23px] xl:my-[27px] 2xl:my-[30px] 3xl:my-[36px] my-[41px] rounded-radius4 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                    inputClassName="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] border-bw3 border-gray_300 border-solid h-[24px] lg:h-[14px] lg:w-[14px] rounded-radius4 w-[24px] xl:h-[17px] xl:w-[16px] mr-[5px]"
                    name="square"
                    label={""}
                  ></CheckBox>
                  <Image
                    src={"images/img_image_14.svg"}
                    className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] my-[17px] lg:my-[9px] object-contain lg:w-[42px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px] w-[72px]"
                    alt="image"
                  />
                  <Row className="items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[15px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] my-[26px] w-[45%]">
                    <Column className="items-start lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] w-[24%]">
                      <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Fish Burger`}</Text>
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`1x`}</Text>
                    </Column>
                    <Text className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`June 1, 2020, 08:22 AM`}</Text>
                    <Column className="items-start lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] w-[40%]">
                      <Column className="w-[100%]">
                        <Row className="items-center justify-start w-[100%]">
                          <Image
                            src={"images/img_location_2.svg"}
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                            alt="Location"
                          />
                          <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Elm Street, 23 Yogyakarta`}</Text>
                        </Row>
                      </Column>
                      <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`2,97 Km`}</Text>
                    </Column>
                  </Row>
                  <Text className="font-semibold lg:mb-[23px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:mt-[22px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39px] xl:my-[26px] text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">
                    <span className="text-amber_600 font-poppins">
                      <>{`$`}</>
                    </span>
                    <span className="text-amber_600 font-poppins">
                      <>{` `}</>
                    </span>
                    <span className="text-bluegray_900 font-poppins">
                      <>{`5.59`}</>
                    </span>
                  </Text>
                  <Button className="bg-light_green_500_26 border border-light_green_500 border-solid font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29px] 2xl:py-[11px] 3xl:py-[13px] py-[14.705px] lg:py-[8px] xl:py-[9px] rounded-radius16 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-light_green_500 w-[10%]">{`Completed`}</Button>
                  <Button className="border border-amber_600 border-solid font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29px] not-italic 2xl:pb-[11px] pb-[14.925px] 2xl:pt-[10px] pt-[14.485px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] rounded-radius16 shadow-bs2 text-amber_600 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[8%]">{`Order Again`}</Button>
                  <Button className="bg-transparent lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[32px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] ml-[55px] lg:my-[23px] xl:my-[27px] 2xl:my-[30px] 3xl:my-[36px] my-[41px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]">
                    {""}
                  </Button>
                </Row>
                <Stack className="lg:h-[310px] xl:h-[354px] 2xl:h-[398px] 3xl:h-[478px] h-[530px] w-[100%]">
                  <Stack className="absolute bottom-[1%] lg:h-[308px] xl:h-[352px] 2xl:h-[396px] 3xl:h-[475px] h-[527px] inset-x-[0] top-[0] w-[100%]">
                    <Stack className="absolute lg:h-[308px] xl:h-[352px] 2xl:h-[396px] 3xl:h-[475px] h-[527px] inset-[0] w-[100%]">
                      <Stack className="absolute lg:h-[308px] xl:h-[352px] 2xl:h-[396px] 3xl:h-[475px] h-[527px] inset-[0] w-[100%]">
                        <Stack className="absolute lg:h-[308px] xl:h-[352px] 2xl:h-[396px] 3xl:h-[475px] h-[527px] inset-[0] w-[100%]">
                          <Row className="absolute bg-white_A700 items-center justify-start rounded-radius1 top-[0] w-[100%]">
                            <CheckBox
                              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[23px] xl:my-[27px] 2xl:my-[30px] 3xl:my-[36px] my-[41px] rounded-radius4 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                              inputClassName="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] border-bw3 border-gray_300 border-solid h-[24px] lg:h-[14px] lg:w-[14px] rounded-radius4 w-[24px] xl:h-[17px] xl:w-[16px] mr-[5px]"
                              name="square"
                              label={""}
                            ></CheckBox>
                            <Image
                              src={"images/img_image_15.svg"}
                              className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] my-[17px] lg:my-[9px] object-contain lg:w-[42px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px] w-[72px]"
                              alt="image"
                            />
                            <Row className="items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[15px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] my-[26px] w-[45%]">
                              <Column className="items-start lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] w-[24%]">
                                <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Pepperoni Pizza`}</Text>
                                <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`1x`}</Text>
                              </Column>
                              <Text className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`June 1, 2020, 08:22 AM`}</Text>
                              <Column className="items-start lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] w-[40%]">
                                <Column className="w-[100%]">
                                  <Row className="items-center justify-start w-[100%]">
                                    <Image
                                      src={"images/img_location_3.svg"}
                                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                      alt="Location"
                                    />
                                    <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Elm Street, 23 Yogyakarta`}</Text>
                                  </Row>
                                </Column>
                                <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`2,97 Km`}</Text>
                              </Column>
                            </Row>
                            <Text className="font-semibold lg:mb-[23px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:mt-[22px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39px] xl:my-[26px] text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">
                              <span className="text-amber_600 font-poppins">
                                <>{`$`}</>
                              </span>
                              <span className="text-amber_600 font-poppins">
                                <>{` `}</>
                              </span>
                              <span className="text-bluegray_900 font-poppins">
                                <>{`5.59`}</>
                              </span>
                            </Text>
                            <Button className="bg-amber_600_19 border border-amber_600 border-solid font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29px] 2xl:py-[11px] 3xl:py-[13px] py-[14.705px] lg:py-[8px] xl:py-[9px] rounded-radius16 text-amber_600 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[10%]">{`Delivering`}</Button>
                            <Button className="border border-amber_600 border-solid font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29px] not-italic 2xl:pb-[11px] pb-[14.925px] 2xl:pt-[10px] pt-[14.485px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] rounded-radius16 shadow-bs2 text-amber_600 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[8%]">{`Order Again`}</Button>
                            <Button className="bg-transparent lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[32px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] ml-[55px] lg:my-[23px] xl:my-[27px] 2xl:my-[30px] 3xl:my-[36px] my-[41px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]">
                              {""}
                            </Button>
                          </Row>
                          <Image
                            src={"images/img_line_1.svg"}
                            className="absolute lg:h-[308px] xl:h-[352px] 2xl:h-[396px] 3xl:h-[475px] h-[527px] inset-y-[0] left-[0] object-contain right-[1%] w-[99%]"
                            alt="line"
                          />
                        </Stack>
                        <Row className="absolute bg-white_A700 items-center justify-start rounded-radius1 top-[20%] w-[100%]">
                          <CheckBox
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[23px] xl:my-[27px] 2xl:my-[30px] 3xl:my-[36px] my-[41px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                            inputClassName="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:w-[14px] w-[24px] xl:h-[17px] xl:w-[16px] mr-[5px]"
                            name="icChecked"
                            label={""}
                          ></CheckBox>
                          <Image
                            src={"images/img_image_16.svg"}
                            className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] my-[17px] lg:my-[9px] object-contain lg:w-[42px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px] w-[72px]"
                            alt="image"
                          />
                          <Row className="items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[15px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] my-[26px] w-[45%]">
                            <Column className="items-start lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] w-[24%]">
                              <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Double Burger`}</Text>
                              <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`1x`}</Text>
                            </Column>
                            <Text className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`June 1, 2020, 08:22 AM`}</Text>
                            <Column className="items-start lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] w-[40%]">
                              <Column className="w-[100%]">
                                <Row className="items-center justify-start w-[100%]">
                                  <Image
                                    src={"images/img_location_4.svg"}
                                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                    alt="Location"
                                  />
                                  <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Elm Street, 23 Yogyakarta`}</Text>
                                </Row>
                              </Column>
                              <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`2,97 Km`}</Text>
                            </Column>
                          </Row>
                          <Text className="font-semibold lg:mb-[23px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:mt-[22px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39px] xl:my-[26px] text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">
                            <span className="text-amber_600 font-poppins">
                              <>{`$`}</>
                            </span>
                            <span className="text-amber_600 font-poppins">
                              <>{` `}</>
                            </span>
                            <span className="text-bluegray_900 font-poppins">
                              <>{`5.59`}</>
                            </span>
                          </Text>
                          <Button className="bg-light_green_500_26 border border-light_green_500 border-solid font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29px] 2xl:py-[11px] 3xl:py-[13px] py-[14.705px] lg:py-[8px] xl:py-[9px] rounded-radius16 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-light_green_500 w-[10%]">{`Completed`}</Button>
                          <Button className="border border-amber_600 border-solid font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29px] not-italic 2xl:pb-[11px] pb-[14.925px] 2xl:pt-[10px] pt-[14.485px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] rounded-radius16 shadow-bs2 text-amber_600 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[8%]">{`Order Again`}</Button>
                          <Button className="bg-transparent lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[32px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] ml-[55px] lg:my-[23px] xl:my-[27px] 2xl:my-[30px] 3xl:my-[36px] my-[41px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]">
                            {""}
                          </Button>
                        </Row>
                      </Stack>
                      <Row className="absolute bg-white_A700 inset-x-[0] inset-y-[40%] items-center justify-start rounded-radius1 w-[100%]">
                        <CheckBox
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[23px] xl:my-[27px] 2xl:my-[30px] 3xl:my-[36px] my-[41px] rounded-radius4 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                          inputClassName="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] border-bw3 border-gray_300 border-solid h-[24px] lg:h-[14px] lg:w-[14px] rounded-radius4 w-[24px] xl:h-[17px] xl:w-[16px] mr-[5px]"
                          name="square"
                          label={""}
                        ></CheckBox>
                        <Image
                          src={"images/img_image_17.svg"}
                          className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] my-[17px] lg:my-[9px] object-contain lg:w-[42px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px] w-[72px]"
                          alt="image"
                        />
                        <Row className="items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[15px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] my-[26px] w-[45%]">
                          <Column className="items-start lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] w-[24%]">
                            <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Beef Burger`}</Text>
                            <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`1x`}</Text>
                          </Column>
                          <Text className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`June 1, 2020, 08:22 AM`}</Text>
                          <Column className="items-start lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] w-[40%]">
                            <Column className="w-[100%]">
                              <Row className="items-center justify-start w-[100%]">
                                <Image
                                  src={"images/img_location_5.svg"}
                                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                  alt="Location"
                                />
                                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Elm Street, 23 Yogyakarta`}</Text>
                              </Row>
                            </Column>
                            <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`2,97 Km`}</Text>
                          </Column>
                        </Row>
                        <Text className="font-semibold lg:mb-[23px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:mt-[22px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39px] xl:my-[26px] text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">
                          <span className="text-amber_600 font-poppins">
                            <>{`$`}</>
                          </span>
                          <span className="text-amber_600 font-poppins">
                            <>{` `}</>
                          </span>
                          <span className="text-bluegray_900 font-poppins">
                            <>{`5.59`}</>
                          </span>
                        </Text>
                        <Button className="bg-light_green_500_26 border border-light_green_500 border-solid font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29px] 2xl:py-[11px] 3xl:py-[13px] py-[14.705px] lg:py-[8px] xl:py-[9px] rounded-radius16 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-light_green_500 w-[10%]">{`Completed`}</Button>
                        <Button className="border border-amber_600 border-solid font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29px] not-italic 2xl:pb-[11px] pb-[14.925px] 2xl:pt-[10px] pt-[14.485px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] rounded-radius16 shadow-bs2 text-amber_600 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[8%]">{`Order Again`}</Button>
                        <Button className="bg-transparent lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[32px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] ml-[55px] lg:my-[23px] xl:my-[27px] 2xl:my-[30px] 3xl:my-[36px] my-[41px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]">
                          {""}
                        </Button>
                      </Row>
                    </Stack>
                    <Row className="absolute bg-white_A700 bottom-[20%] items-center justify-start rounded-radius1 w-[100%]">
                      <CheckBox
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[23px] xl:my-[27px] 2xl:my-[30px] 3xl:my-[36px] my-[41px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        inputClassName="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] h-[24px] lg:h-[14px] lg:w-[14px] w-[24px] xl:h-[17px] xl:w-[16px] mr-[5px]"
                        name="icChecked"
                        label={""}
                      ></CheckBox>
                      <Image
                        src={"images/img_image_18.svg"}
                        className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] my-[17px] lg:my-[9px] object-contain lg:w-[42px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px] w-[72px]"
                        alt="image"
                      />
                      <Row className="items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[15px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] my-[26px] w-[45%]">
                        <Column className="items-start lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] w-[24%]">
                          <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Japanese Ramen`}</Text>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`1x`}</Text>
                        </Column>
                        <Text className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] ml-[39px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`June 1, 2020, 08:22 AM`}</Text>
                        <Column className="items-start lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] w-[40%]">
                          <Column className="w-[100%]">
                            <Row className="items-center justify-start w-[100%]">
                              <Image
                                src={"images/img_location_6.svg"}
                                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                                alt="Location"
                              />
                              <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Elm Street, 23 Yogyakarta`}</Text>
                            </Row>
                          </Column>
                          <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`2,97 Km`}</Text>
                        </Column>
                      </Row>
                      <Text className="font-semibold lg:mb-[23px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:mt-[22px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39px] xl:my-[26px] text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">
                        <span className="text-amber_600 font-poppins">
                          <>{`$`}</>
                        </span>
                        <span className="text-amber_600 font-poppins">
                          <>{` `}</>
                        </span>
                        <span className="text-bluegray_900 font-poppins">
                          <>{`5.59`}</>
                        </span>
                      </Text>
                      <Button className="bg-amber_600_19 border border-amber_600 border-solid font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29px] 2xl:py-[11px] 3xl:py-[13px] py-[14.705px] lg:py-[8px] xl:py-[9px] rounded-radius16 text-amber_600 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[10%]">{`Delivering`}</Button>
                      <Button className="border border-amber_600 border-solid font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29px] not-italic 2xl:pb-[11px] pb-[14.925px] 2xl:pt-[10px] pt-[14.485px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] rounded-radius16 shadow-bs2 text-amber_600 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[8%]">{`Order Again`}</Button>
                      <Button className="bg-transparent lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[32px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] ml-[55px] lg:my-[23px] xl:my-[27px] 2xl:my-[30px] 3xl:my-[36px] my-[41px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]">
                        {""}
                      </Button>
                    </Row>
                  </Stack>
                  <Row className="absolute bg-white_A700 bottom-[0] items-center justify-start rounded-radius1 w-[100%]">
                    <CheckBox
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] ml-[32px] lg:my-[23px] xl:my-[27px] 2xl:my-[30px] 3xl:my-[36px] my-[41px] rounded-radius4 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      inputClassName="2xl:h-[19px] 2xl:w-[18px] 3xl:h-[22px] 3xl:w-[21px] border-bw3 border-gray_300 border-solid h-[24px] lg:h-[14px] lg:w-[14px] rounded-radius4 w-[24px] xl:h-[17px] xl:w-[16px] mr-[5px]"
                      name="square"
                      label={""}
                    ></CheckBox>
                    <Image
                      src={"images/img_image_19.svg"}
                      className="lg:h-[42px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] h-[72px] lg:ml-[17px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] ml-[30px] xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] my-[17px] lg:my-[9px] object-contain lg:w-[42px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px] w-[72px]"
                      alt="image"
                    />
                    <Row className="items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] lg:my-[15px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] my-[26px] w-[45%]">
                      <Column className="items-start lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] w-[24%]">
                        <Text className="font-semibold text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Vegan Pizza`}</Text>
                        <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`1x`}</Text>
                      </Column>
                      <Text className="font-normal xl:mb-[11px] 3xl:mb-[15px] mb-[17px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] xl:mt-[10px] 3xl:mt-[14px] mt-[16px] 2xl:my-[12px] lg:my-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`June 1, 2020, 08:22 AM`}</Text>
                      <Column className="items-start lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] w-[40%]">
                        <Column className="w-[100%]">
                          <Row className="items-center justify-start w-[100%]">
                            <Image
                              src={"images/img_location_7.svg"}
                              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] my-[1px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                              alt="Location"
                            />
                            <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">{`Elm Street, 23 Yogyakarta`}</Text>
                          </Row>
                        </Column>
                        <Text className="font-normal mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[auto]">{`2,97 Km`}</Text>
                      </Column>
                    </Row>
                    <Text className="font-semibold lg:mb-[23px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:mt-[22px] 2xl:mt-[29px] 3xl:mt-[35px] mt-[39px] xl:my-[26px] text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left w-[auto]">
                      <span className="text-amber_600 font-poppins">
                        <>{`$`}</>
                      </span>
                      <span className="text-amber_600 font-poppins">
                        <>{` `}</>
                      </span>
                      <span className="text-bluegray_900 font-poppins">
                        <>{`5.59`}</>
                      </span>
                    </Text>
                    <Button className="bg-red_A200_19 border border-red_400 border-solid font-semibold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] ml-[80px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29px] 2xl:py-[11px] 3xl:py-[13px] py-[14.705px] lg:py-[8px] xl:py-[9px] rounded-radius16 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-red_400 w-[10%]">{`Canceled`}</Button>
                    <Button className="border border-amber_600 border-solid font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] my-[29px] not-italic 2xl:pb-[11px] pb-[14.925px] 2xl:pt-[10px] pt-[14.485px] 3xl:py-[13px] lg:py-[8px] xl:py-[9px] rounded-radius16 shadow-bs2 text-amber_600 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[8%]">{`Order Again`}</Button>
                    <Button className="bg-transparent lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[32px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] ml-[55px] lg:my-[23px] xl:my-[27px] 2xl:my-[30px] 3xl:my-[36px] my-[41px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]">
                      {""}
                    </Button>
                  </Row>
                </Stack>
              </Column>
              <Row className="items-center justify-between lg:mb-[30px] xl:mb-[35px] 2xl:mb-[39px] 3xl:mb-[47px] mb-[53px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] mt-[37px] mx-[auto] w-[95%]">
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
                    <>{` 100 `}</>
                  </span>
                  <span className="text-gray_500 font-poppins">
                    <>{`data`}</>
                  </span>
                </Text>
                <Row className="items-center justify-between w-[20%]">
                  <Button className="bg-transparent lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] my-[9.5px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]">
                    {""}
                  </Button>
                  <Button className="bg-amber_600 font-normal lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] h-[50px] leading-lh my-[1px] not-italic 3xl:pb-[10px] pb-[12px] lg:pb-[7px] xl:pb-[8px] 2xl:pb-[9px] lg:pl-[12px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] pl-[22px] pt-[11px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] rounded-radius16 text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px] w-[50px]">{`1`}</Button>
                  <Button className="bg-amber_600 font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] leading-lh not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius16 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700 lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]">{`2`}</Button>
                  <Button className="bg-deep_orange_400_19 font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] h-[51px] leading-lh not-italic lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] pl-[20px] 3xl:py-[10px] py-[12px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] rounded-radius16 text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px] w-[51px]">{`3`}</Button>
                  <Button className="bg-transparent lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] h-[32px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] my-[9.5px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px] w-[32px]">
                    {""}
                  </Button>
                </Row>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default OrderHistoryPage;
