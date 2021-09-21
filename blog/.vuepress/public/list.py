import os
import re
import requests


def songsDownload(list_id):
    # 拼接歌曲 url
    url = "https://api.imjad.cn/cloudmusic/?type=playlist&id=" + list_id
    # 获取 json
    res = requests.get(url).json()
    # 判断是否响应成功
    if res["code"] == 200:
        # 获取歌单名
        list_name = res["playlist"]["name"]
        list_name = re.sub(r'[\\/:*?"<>|\r\n]+', "_", list_name)
        # 创建文件夹
        if os.path.exists("./songs/"+list_name):
            pass
        else:
            os.makedirs("./songs/"+list_name)
        # 获取歌曲 ids
        track_ids = res["playlist"]["trackIds"]
        # 下载歌曲
        num = 0
        for i in track_ids:
            song_id = str(i["id"])
            file = "songs/"+list_name+"/"  # 保存音乐的文件路径,最后加斜杠
            # 获取歌曲信息
            wang_res = requests.get('https://api.imjad.cn/cloudmusic/?type=detail&id=' + song_id).json()
            # 拼接歌曲下载链接
            song_url = "https://link.hhtjim.com/163/" + song_id + ".mp3"
            # 获取歌曲16进制编码
            song = requests.get(song_url).content
            # 获取歌曲名称
            song_name = wang_res["songs"][0]["name"] + "_" + wang_res["songs"][0]["ar"][0]["name"]
            # 剔除非法文件名
            song_name = re.sub(r'[\\/:*?"<>|\r\n]+', "_", song_name)
            # 保存文件
            with open(file + song_name + '.mp3', 'wb') as f:
                f.write(song)
                print('歌名：' + song_name + "[" + str(num) + "/" + str(len(track_ids)) + "]")
            num += 1
        print("下载完毕")
        return
    else:
        return


while 1:
    songsDownload(input("请输入网易云歌单id: "))
