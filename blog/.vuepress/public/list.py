import re
import requests


def songsDownload(list_id):
    url = "https://api.imjad.cn/cloudmusic/?type=playlist&id=" + list_id
    res = requests.get(url).json()
    if res["code"] == 200:
        track_ids = res["playlist"]["trackIds"]
        num = 0
        for i in track_ids:
            song_id = str(i["id"])
            file = "songs/"  # 保存音乐的文件路径,最后加斜杠
            wang_url = 'https://api.imjad.cn/cloudmusic/?type=detail&id=' + song_id
            song_url = "https://link.hhtjim.com/163/" + song_id + ".mp3"
            # 获取歌曲16进制编码
            song = requests.get(song_url).content
            # 获取歌曲名称
            song_name = requests.get(wang_url).json()["songs"][0]["name"]
            # 剔除非法文件名
            song_name = re.sub(r'[\\/:*?"<>|\r\n]+', "_", song_name)
            # 保存文件
            with open(file + song_name + '.mp3', 'wb') as f:
                f.write(song)
                print('歌名：' + song_name + "[" + str(num) + str(len(track_ids)) + "]")
            num += 1
        print("下载完毕")
        return
    else:
        return


while 1:
    songsDownload(input("请输入网易云歌单id: "))
