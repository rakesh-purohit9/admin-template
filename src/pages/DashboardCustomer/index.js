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
import { RatingBar } from "components/RatingBar";
import { Line } from "components/Line";

const DashboardCustomerPage = () => {
  const navigate = useNavigate();

  const handleNavigate81 = () => navigate("/foodorder");
  const handleNavigate82 = () => navigate("/favoritemenu");
  const handleNavigate78 = () => navigate("/chat");
  const handleNavigate79 = () => navigate("/orderhistory");
  const handleNavigate80 = () => navigate("/bills");
  const handleNavigate73 = () => navigate("/settingscustomer");
  const handleNavigate33 = () => navigate("/dashboardrestaurant");

  return (
    <>
      <Column className="bg-gray_100 font-poppins mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[100%]">
          <aside className="bg-white_A700 items-center w-[18%]">
            <Column className="">
              <Column className="items-center justify-start lg:mb-[348px] xl:mb-[398px] 2xl:mb-[448px] 3xl:mb-[538px] mb-[598px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] mx-[auto] w-[73%]">
                <Text className="font-bold mx-[auto] text-bluegray_900 lg:text-fs23 xl:text-fs26 2xl:text-fs30 3xl:text-fs36 text-fs40 text-left">
                  <span className="text-bluegray_900 font-poppins">
                    <>{`GoMeal`}</>
                  </span>
                  <span className="text-amber_600 font-poppins">
                    <>{`.`}</>
                  </span>
                </Text>
                <Row className="bg-amber_600 items-center justify-start lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] mt-[62px] rounded-radius16 shadow-bs w-[100%]">
                  <Image
                    src="img_restaurantloca.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] 3xl:my-[10px] my-[12px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="RestaurantLoca"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[10px] xl:my-[12px] 2xl:my-[13px] 3xl:my-[16px] my-[18.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left text-white_A700">{`Dashboard`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate81}
                >
                  <Image
                    src="img_deliveryscoote.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="DeliveryScoote"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Food Order`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate82}
                >
                  <Image
                    src="img_review.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Review"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Favorite`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate78}
                >
                  <Image
                    src="img_orderdiscussio.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="OrderDiscussio"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Message`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate79}
                >
                  <Image
                    src="img_24hourfoodde.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="24HourFoodDe"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Order History`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate80}
                >
                  <Image
                    src="img_bill.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Bill"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Bills`}</Text>
                </Row>
                <Row
                  className="common-pointer items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] rounded-radius20 w-[100%]"
                  onClick={handleNavigate73}
                >
                  <Image
                    src="img_setting.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] h-[40px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] my-[16px] lg:my-[9px] object-contain lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px] w-[40px]"
                    alt="Setting"
                  />
                  <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] ml-[24px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] my-[22.5px] lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Setting`}</Text>
                </Row>
                <Stack className="lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[100%]">
                  <div className="absolute bg-gradient  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-y-[0] left-[20%] right-[19%] rounded-radius32 shadow-bs1 w-[61%]"></div>
                  <Stack className="absolute bg-gradient1  lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] rounded-radius16 w-[100%]">
                    <Image
                      src="img_maskgroup.png"
                      className="common-pointer absolute lg:h-[118px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] h-[202px] inset-[0] object-cover w-[100%]"
                      onClick={handleNavigate33}
                      alt="MaskGroup"
                    />
                    <Column className="absolute items-start justify-start right-[6%] top-[11%] w-[82%]">
                      <Column className="w-[100%]">
                        <Stack className="lg:h-[54px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] h-[91px] w-[100%]">
                          <Image
                            src="img_vector.svg"
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
          <Column className="items-center lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] mb-[40px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[54%]">
            <Row className="items-start justify-between w-[100%]">
              <Text className="font-bold lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] mb-[6px] ml-[1px] text-bluegray_900 lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32 text-fs36 text-left">{`Hello, Samantha`}</Text>
              <div className="bg-transparent border-0 w-[49%] input-wrap">
                <Image
                  src="img_xmlid_223.svg"
                  className="absolute h-[24px] left-[28px] bg-transparent border-0 lg:h-[14px] lg:left-[16px] xl:h-[17px] xl:left-[18px] 2xl:h-[19px] 2xl:left-[21px] 3xl:h-[22px] 3xl:left-[25px] my-[auto] inset-y-[0]"
                  alt="XMLID 223"
                />
                <Input
                  className="placeholder:bg-transparent bg-white_A700 border-0 font-normal not-italic lg:pl-[46px] xl:pl-[53px] 2xl:pl-[60px] 3xl:pl-[72px] pl-[80px] lg:py-[11px] xl:py-[13px] 2xl:py-[14px] 3xl:py-[17px] py-[19.545px] rounded-radius16 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  name="Group21"
                  placeholder={`What do you want eat today...`}
                ></Input>
              </div>
            </Row>
            <Stack className="lg:h-[140px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] h-[240px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
              <Image
                src="img_maskgroup_1.svg"
                className="absolute lg:h-[140px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] h-[240px] inset-[0] object-cover w-[100%]"
                alt="MaskGroup"
              />
              <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start left-[5%] my-[auto] w-[46%]">
                <Text className="font-bold leading-lh mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:text-fs18 xl:text-fs21 2xl:text-fs24 3xl:text-fs28 text-fs32 text-left text-white_A700 w-[74%]">
                  {
                    <>
                      {`Get Discount Voucher`}
                      <br />
                      {`Up To 20%`}
                    </>
                  }
                </Text>
                <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left text-white_A700 w-[100%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
              </Column>
            </Stack>
            <Row className="items-center justify-start lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[41px] w-[100%]">
              <Text className="font-bold text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`Category`}</Text>
              <Text className="font-normal xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[479px] xl:ml-[548px] 2xl:ml-[616px] 3xl:ml-[740px] ml-[822px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] not-italic text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`View all`}</Text>
              <Image
                src="img_chevrondown.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                alt="chevrondown"
              />
            </Row>
            <Row className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-6 items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
              <Column className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center lg:py-[17px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] py-[30.5px] rounded-radius16 xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                <Image
                  src="img_baked.svg"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  alt="Baked"
                />
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500">{`Bakery`}</Text>
              </Column>
              <Column className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center lg:py-[17px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] py-[30.5px] rounded-radius16 xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                <Image
                  src="img_burger.svg"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  alt="Burger"
                />
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500">{`Burger`}</Text>
              </Column>
              <Column className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center lg:py-[17px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] py-[30.5px] rounded-radius16 xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                <Image
                  src="img_coffee.svg"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  alt="Coffee"
                />
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500">{`Beverage`}</Text>
              </Column>
              <Column className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center lg:py-[17px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] py-[30.5px] rounded-radius16 xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                <Image
                  src="img_chicken.svg"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  alt="Chicken"
                />
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500">{`Chicken`}</Text>
              </Column>
              <Column className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center lg:py-[17px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] py-[30.5px] rounded-radius16 xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                <Image
                  src="img_fast.svg"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  alt="Fast"
                />
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500">{`Pizza`}</Text>
              </Column>
              <Column className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] h-[160px] lg:h-[94px] items-center lg:py-[17px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] py-[30.5px] rounded-radius16 xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] w-[160px] lg:w-[93px]">
                <Image
                  src="img_fish.svg"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] mx-[auto] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                  alt="Fish"
                />
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] mx-[auto] not-italic text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500">{`Seafood`}</Text>
              </Column>
            </Row>
            <Row className="items-center justify-start lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[100%]">
              <Text className="font-bold text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`Popular Dishes`}</Text>
              <Text className="font-normal xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[440px] xl:ml-[503px] 2xl:ml-[566px] 3xl:ml-[679px] ml-[755px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] not-italic text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`View all`}</Text>
              <Image
                src="img_chevrondown_1.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                alt="chevrondown"
              />
            </Row>
            <List
              className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-3 min-h-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
              orientation="horizontal"
            >
              <Stack className="lg:h-[212px] xl:h-[243px] 2xl:h-[273px] 3xl:h-[327px] h-[363px] w-[100%]">
                <Stack className="absolute lg:h-[212px] xl:h-[243px] 2xl:h-[273px] 3xl:h-[327px] h-[363px] inset-[0] w-[100%]">
                  <Image
                    src="img_border.svg"
                    className="absolute lg:h-[212px] xl:h-[243px] 2xl:h-[273px] 3xl:h-[327px] h-[363px] inset-[0] object-contain rounded-radius16 w-[100%]"
                    alt="border"
                  />
                  <Button className="absolute bg-red_400 font-normal left-[0] not-italic 2xl:pb-[2px] xl:pb-[2px] pb-[3.545px] 3xl:pb-[3px] 2xl:pt-[3px] xl:pt-[3px] pt-[4.545px] 3xl:pt-[4px] lg:py-[2px] rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 top-[8%] w-[28%]">{`15% Off`}</Button>
                </Stack>
                <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[81%]">
                  <Column className="w-[100%]">
                    <Row className="items-start justify-end w-[100%]">
                      <Image
                        src="img_image.svg"
                        className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src="img_love.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] mb-[156px] lg:mb-[91px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] ml-[22px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Love"
                      />
                    </Row>
                  </Column>
                  <RatingBar
                    className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px]"
                    selectedStarCount={5}
                    starCount={5}
                    color="var(--undefined)"
                    activeColor="var(--amber_600)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                  <Column className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Column className="items-start w-[37%]">
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
                        src="img_button.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:my-[4px] object-contain rounded-radius8 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="button"
                      />
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[212px] xl:h-[243px] 2xl:h-[273px] 3xl:h-[327px] h-[363px] w-[100%]">
                <Stack className="absolute lg:h-[212px] xl:h-[243px] 2xl:h-[273px] 3xl:h-[327px] h-[363px] inset-[0] w-[100%]">
                  <Image
                    src="img_border_1.svg"
                    className="absolute lg:h-[212px] xl:h-[243px] 2xl:h-[273px] 3xl:h-[327px] h-[363px] inset-[0] object-cover rounded-radius16 w-[100%]"
                    alt="border"
                  />
                  <Button className="absolute bg-red_400 font-normal left-[0] not-italic 2xl:pb-[2px] xl:pb-[2px] pb-[3.545px] 3xl:pb-[3px] 2xl:pt-[3px] xl:pt-[3px] pt-[4.545px] 3xl:pt-[4px] lg:py-[2px] rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 top-[8%] w-[29%]">{`15% Off`}</Button>
                </Stack>
                <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[81%]">
                  <Column className="w-[100%]">
                    <Row className="items-start justify-end w-[100%]">
                      <Image
                        src="img_image_1.svg"
                        className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src="img_love_1.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] mb-[156px] lg:mb-[91px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] ml-[22px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Love"
                      />
                    </Row>
                  </Column>
                  <RatingBar
                    className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px]"
                    selectedStarCount={5}
                    starCount={5}
                    color="var(--undefined)"
                    activeColor="var(--amber_600)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                  <Column className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Column className="items-start w-[39%]">
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
                        src="img_button_1.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:my-[4px] object-contain rounded-radius8 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="button"
                      />
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="lg:h-[212px] xl:h-[243px] 2xl:h-[273px] 3xl:h-[327px] h-[363px] w-[100%]">
                <Stack className="absolute lg:h-[212px] xl:h-[243px] 2xl:h-[273px] 3xl:h-[327px] h-[363px] inset-[0] w-[100%]">
                  <Image
                    src="img_border_2.svg"
                    className="absolute lg:h-[212px] xl:h-[243px] 2xl:h-[273px] 3xl:h-[327px] h-[363px] inset-[0] object-cover rounded-radius16 w-[100%]"
                    alt="border"
                  />
                  <Button className="absolute bg-red_400 font-normal left-[0] not-italic 2xl:pb-[2px] xl:pb-[2px] pb-[3.545px] 3xl:pb-[3px] 2xl:pt-[3px] xl:pt-[3px] pt-[4.545px] 3xl:pt-[4px] lg:py-[2px] rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 top-[8%] w-[29%]">{`15% Off`}</Button>
                </Stack>
                <Column className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[81%]">
                  <Column className="w-[100%]">
                    <Row className="items-start justify-end w-[100%]">
                      <Image
                        src="img_image_2.svg"
                        className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src="img_love_2.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] mb-[156px] lg:mb-[91px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] ml-[22px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Love"
                      />
                    </Row>
                  </Column>
                  <RatingBar
                    className="mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px]"
                    selectedStarCount={5}
                    starCount={5}
                    color="var(--undefined)"
                    activeColor="var(--amber_600)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                  <Column className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Column className="items-start w-[49%]">
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
                        src="img_button_2.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] h-[48px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] mb-[7px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:my-[4px] object-contain rounded-radius8 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px] w-[48px]"
                        alt="button"
                      />
                    </Row>
                  </Column>
                </Column>
              </Stack>
            </List>
            <Row className="items-center justify-start lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] w-[100%]">
              <Text className="font-bold text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`Recent Order`}</Text>
              <Text className="font-normal xl:mb-[3px] 3xl:mb-[4px] mb-[5px] lg:ml-[453px] xl:ml-[518px] 2xl:ml-[583px] 3xl:ml-[699px] ml-[777px] xl:mt-[2px] 3xl:mt-[3px] mt-[4px] lg:my-[2px] 2xl:my-[3px] not-italic text-amber_600 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`View all`}</Text>
              <Image
                src="img_chevrondown_2.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] my-[6px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                alt="chevrondown"
              />
            </Row>
            <List
              className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-3 min-h-[auto] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]"
              orientation="horizontal"
            >
              <Stack className="lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] w-[100%]">
                <Image
                  src="img_border_3.svg"
                  className="absolute lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] inset-[0] object-cover rounded-radius16 w-[100%]"
                  alt="border"
                />
                <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[10%] w-[67%]">
                  <Column className="w-[100%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Image
                        src="img_image_3.svg"
                        className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src="img_love_3.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] mb-[156px] lg:mb-[91px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Love"
                      />
                    </Row>
                  </Column>
                  <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:mx-[23px] xl:mx-[26px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[40px] text-bluegray_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18">{`Fish Burger`}</Text>
                  <Text className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[32px] xl:mx-[37px] 2xl:mx-[42px] 3xl:mx-[50px] mx-[56px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-red_400">
                    <span className="text-amber_600 font-poppins">
                      <>{`$`}</>
                    </span>
                    <span className="text-bluegray_900 font-poppins">
                      <>{`5.59`}</>
                    </span>
                  </Text>
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] mx-[17px] lg:mx-[9px] w-[65%]">
                    <Text className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`4.97 km`}</Text>
                    <div className="bg-gray_400 lg:h-[4px] 2xl:h-[5px] xl:h-[5px] h-[6px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[10.5px] lg:my-[6px] 2xl:my-[7px] xl:my-[7px] 3xl:my-[9px] rounded-radius50 lg:w-[3px] 2xl:w-[4px] xl:w-[4px] 3xl:w-[5px] w-[6px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`21 min`}</Text>
                  </Row>
                </Column>
              </Stack>
              <Stack className="lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] w-[100%]">
                <Image
                  src="img_border_4.svg"
                  className="absolute lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] inset-[0] object-cover rounded-radius16 w-[100%]"
                  alt="border"
                />
                <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[10%] w-[67%]">
                  <Column className="w-[100%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Image
                        src="img_image_4.svg"
                        className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src="img_love_4.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] mb-[156px] lg:mb-[91px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Love"
                      />
                    </Row>
                  </Column>
                  <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:mx-[15px] xl:mx-[17px] 2xl:mx-[19px] 3xl:mx-[23px] mx-[26px] text-bluegray_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18">{`Japan Ramen`}</Text>
                  <Text className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[32px] xl:mx-[37px] 2xl:mx-[42px] 3xl:mx-[50px] mx-[56px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-red_400">
                    <span className="text-amber_600 font-poppins">
                      <>{`$`}</>
                    </span>
                    <span className="text-bluegray_900 font-poppins">
                      <>{`5.59`}</>
                    </span>
                  </Text>
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] mx-[17px] lg:mx-[9px] w-[65%]">
                    <Text className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`4.97 km`}</Text>
                    <div className="bg-gray_400 lg:h-[4px] 2xl:h-[5px] xl:h-[5px] h-[6px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[10.5px] lg:my-[6px] 2xl:my-[7px] xl:my-[7px] 3xl:my-[9px] rounded-radius50 lg:w-[3px] 2xl:w-[4px] xl:w-[4px] 3xl:w-[5px] w-[6px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`21 min`}</Text>
                  </Row>
                </Column>
              </Stack>
              <Stack className="lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] w-[100%]">
                <Image
                  src="img_border_5.svg"
                  className="absolute lg:h-[219px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] h-[374px] inset-[0] object-cover rounded-radius16 w-[100%]"
                  alt="border"
                />
                <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[10%] w-[67%]">
                  <Column className="w-[100%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Image
                        src="img_image_5.svg"
                        className="lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] h-[180px] object-contain lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] w-[180px]"
                        alt="image"
                      />
                      <Image
                        src="img_love_5.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] xl:mb-[104px] 2xl:mb-[117px] 3xl:mb-[140px] mb-[156px] lg:mb-[91px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                        alt="Love"
                      />
                    </Row>
                  </Column>
                  <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] lg:mx-[27px] xl:mx-[31px] 2xl:mx-[35px] 3xl:mx-[42px] mx-[47px] text-bluegray_900 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18">{`Fried Rice`}</Text>
                  <Text className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[32px] xl:mx-[37px] 2xl:mx-[42px] 3xl:mx-[50px] mx-[56px] text-center lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-red_400">
                    <span className="text-amber_600 font-poppins">
                      <>{`$`}</>
                    </span>
                    <span className="text-bluegray_900 font-poppins">
                      <>{`5.59`}</>
                    </span>
                  </Text>
                  <Row className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] mx-[17px] lg:mx-[9px] w-[65%]">
                    <Text className="font-normal not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`4.97 km`}</Text>
                    <div className="bg-gray_400 lg:h-[4px] 2xl:h-[5px] xl:h-[5px] h-[6px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] my-[10.5px] lg:my-[6px] 2xl:my-[7px] xl:my-[7px] 3xl:my-[9px] rounded-radius50 lg:w-[3px] 2xl:w-[4px] xl:w-[4px] 3xl:w-[5px] w-[6px]"></div>
                    <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`21 min`}</Text>
                  </Row>
                </Column>
              </Stack>
            </List>
          </Column>
          <Column className="bg-white_A700 items-start w-[24%]">
            <Column className="items-center lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] mt-[56px] w-[100%]">
              <Image
                src="img_menu.svg"
                className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] h-[60px] mx-[auto] object-contain w-[82%]"
                alt="menu"
              />
            </Column>
            <Text className="font-bold lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] lg:mx-[23px] xl:mx-[26px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[40px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`Your Balance`}</Text>
            <Column className="items-center lg:mb-[175px] xl:mb-[200px] 2xl:mb-[225px] 3xl:mb-[270px] mb-[300px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
              <Stack className="xl:h-[111px] 2xl:h-[124px] 3xl:h-[149px] h-[165px] lg:h-[97px] mx-[auto] w-[82%]">
                <Image
                  src="img_background.svg"
                  className="absolute xl:h-[111px] 2xl:h-[124px] 3xl:h-[149px] h-[165px] lg:h-[97px] inset-[0] object-cover w-[100%]"
                  alt="background"
                />
                <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[83%]">
                  <Column className="bg-white_A700 items-start justify-center xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] py-[16px] lg:py-[9px] rounded-radius16 w-[51%]">
                    <Text className="font-normal xl:mx-[10px] 2xl:mx-[12px] 3xl:mx-[14px] mx-[16px] lg:mx-[9px] not-italic text-bluegray_900 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left">{`Balance`}</Text>
                    <Text className="font-bold xl:mx-[10px] 2xl:mx-[12px] 3xl:mx-[14px] mx-[16px] lg:mx-[9px] text-bluegray_900 lg:text-fs18 xl:text-fs21 2xl:text-fs24 3xl:text-fs28 text-fs32 text-left">{`$12.000`}</Text>
                  </Column>
                  <Column className="lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mb-[8px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] ml-[23px] w-[41%]">
                    <Row className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] gap-[16px] lg:gap-[9px] grid grid-cols-2 items-center justify-between pr-[1px] w-[100%]">
                      <Image
                        src="img_icon.svg"
                        className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                        alt="icon"
                      />
                      <Image
                        src="img_icon_1.svg"
                        className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] h-[56px] object-contain lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px] w-[56px]"
                        alt="icon"
                      />
                    </Row>
                    <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                      <Text className="font-normal xl:ml-[2px] lg:ml-[2px] 3xl:ml-[3px] 2xl:ml-[3px] ml-[4px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left text-white_A700">{`Top Up`}</Text>
                      <Text className="font-normal not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-left text-white_A700">{`Transfer`}</Text>
                    </Row>
                  </Column>
                </Row>
              </Stack>
              <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] w-[100%]">
                <Text className="font-normal lg:mx-[23px] xl:mx-[26px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[40px] not-italic lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-gray_500 text-left">{`Your Address`}</Text>
                <Column className="items-center lg:mt-[1px] 3xl:mt-[2px] 2xl:mt-[2px] xl:mt-[2px] mt-[3px] w-[100%]">
                  <Row className="items-start justify-start mx-[auto] w-[82%]">
                    <Image
                      src="img_location.svg"
                      className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] h-[24px] mb-[1px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] mt-[6px] object-contain lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px] w-[24px]"
                      alt="Location"
                    />
                    <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] ml-[8px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] mt-[5px] text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">{`Elm Street, 23`}</Text>
                    <Button className="border border-amber_600 border-solid font-normal 3xl:ml-[111px] ml-[124px] lg:ml-[72px] xl:ml-[82px] 2xl:ml-[93px] not-italic lg:pb-[3px] 2xl:pb-[4px] 3xl:pb-[5px] pb-[6.205px] lg:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] pt-[7.205px] xl:py-[4px] rounded-radius8 text-amber_600 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[25%]">{`Change`}</Button>
                  </Row>
                </Column>
                <Text className="font-normal lg:leading-lh14 xl:leading-lh16 2xl:leading-lh18 3xl:leading-lh21 leading-lh2400 lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] mt-[8px] lg:mx-[23px] xl:mx-[26px] 2xl:mx-[30px] 3xl:mx-[36px] mx-[40px] not-italic 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left w-[82%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`}</Text>
                <Column className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] mt-[16px] lg:mt-[9px] w-[100%]">
                  <Row className="items-center justify-start w-[100%]">
                    <Button className="border border-gray_500 border-solid font-normal lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] ml-[40px] not-italic lg:pb-[3px] 2xl:pb-[4px] 3xl:pb-[5px] pb-[6.205px] lg:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] pt-[7.205px] xl:py-[4px] rounded-radius8 text-bluegray_900 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[26%]">{`Add Details`}</Button>
                    <Button className="border border-gray_500 border-solid font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] ml-[16px] lg:ml-[9px] not-italic lg:pb-[3px] 2xl:pb-[4px] 3xl:pb-[5px] pb-[6.205px] lg:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] pt-[7.205px] xl:py-[4px] rounded-radius8 text-bluegray_900 text-center 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 w-[22%]">{`Add Note`}</Button>
                  </Row>
                </Column>
              </Column>
              <Column className="items-start justify-start lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] w-[82%]">
                <Text className="font-bold mr-[10px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] text-bluegray_900 lg:text-fs14 xl:text-fs16 2xl:text-fs18 3xl:text-fs21 text-fs24 text-left">{`Order Menu`}</Text>
                <Column className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] w-[100%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="items-center justify-start xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] my-[4px] w-[100%]">
                      <Image
                        src="img_maskgroup_2.svg"
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
                        src="img_maskgroup_3.svg"
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
                        src="img_maskgroup_4.svg"
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
              <Line className="bg-gray_300 h-[1px] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] mt-[88px] mx-[auto] w-[82%]" />
              <Row className="items-center justify-between lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] mt-[31px] mx-[auto] w-[82%]">
                <Text className="font-medium lg:my-[1px] 3xl:my-[2px] 2xl:my-[2px] xl:my-[2px] my-[3px] 2xl:text-fs10 3xl:text-fs12 text-fs14 lg:text-fs8 xl:text-fs9 text-gray_500 text-left">{`Service`}</Text>
                <Text className="font-medium text-bluegray_900 lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-left">
                  <span className="text-bluegray_900 font-poppins">
                    <>{`+`}</>
                  </span>
                  <span className="text-amber_600 font-poppins">
                    <>{`$`}</>
                  </span>
                  <span className="text-bluegray_900 font-poppins">
                    <>{`1.00`}</>
                  </span>
                </Text>
              </Row>
              <Row className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] mt-[24px] mx-[auto] w-[82%]">
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
              <Button className="bg-gray_100 border border-amber_600 border-solid lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] mt-[40px] mx-[auto] rounded-radius16 w-[82%]">
                {""}
              </Button>
              <Button className="bg-amber_600 font-medium lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] mt-[32px] mx-[auto] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] py-[20.045px] rounded-radius16 text-center lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16 text-fs18 text-white_A700 w-[82%]">{`Checkout`}</Button>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DashboardCustomerPage;
