import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import members from './members';

export default function Home() {
  return (<>
    <div className="w-screen h-screen">
      <div className="w-full h-full flex">
        <div className="w-3/5 h-full flex flex-col">
          <h2 className="w-full h-32 font-bold text-5xl pl-2 flex items-center">
            <Image src={"/icon/gold.png"} alt={"oukan"} width={80} height={80} className="mx-2" />
            ランキング
          </h2>

          <div className="">
            <table className="table w-full">

              <thead>
                <tr>
                  <th className="text-xl">順位</th>
                  <th className="text-xl">ニックネーム</th>
                  <th className="text-xl">点数</th>
                </tr>
              </thead>
              <tbody>

                {members.slice(0, 5).map((member, index) => {
                  var color = "bg-gray-500";
                  switch (index) {
                    case 0: color = "bg-yellow-400"; break;
                    case 1: color = "bg-gray-300"; break;
                    case 2: color = "bg-amber-500"; break;
                  }
                  return (
                    <tr className={color}>
                      <th className="text-4xl bg-opacity-0 text-white font-bold">{index + 1}</th>
                      <td className="text-2xl bg-opacity-0 text-white font-bold">{member.name}</td>
                      <td className="text-2xl bg-opacity-0 text-white font-bold">{member.score}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="my-auto ml-4">
            <h3 className="text-xl font-bold">ルールについて</h3>
            <p>制限時間内に、どんどん出現する的を撃ち抜いていくVRゲームです！</p>
            <p>的を一つ壊すたびにスコアに100点が加算されます</p>
            <p>すべての的を破壊するとクリアです！</p>
            <p>クリア時の残り秒数✖️100が最終スコアに加算されます！</p>
          </div>

          <Image src="/icon/paypay.png" alt="paypay使えます！" height={80} width={640}  />



        </div>

        <div className="w-2/5 h-full overflow-y-auto p-3">
          <table className="table w-full">
            <tbody>

              {members.slice(5).map((member, index) => {
                return (
                  <tr className={index%2==1 ? "bg-gray-100" : "bg-white"}>
                    <th className="text-sm bg-opacity-0">{index + 6}</th>
                    <td className="text-sm bg-opacity-0">{member.name}</td>
                    <td className="text-sm bg-opacity-0">{member.score}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>)
}
