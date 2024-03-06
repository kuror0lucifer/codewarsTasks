#include <string>

std::string encode_rail_fence_cipher(const std::string &str, int n) {
  if (str.empty()) {
    return "";
  }
  std::string answ = "";
  bool dir_down = false;
  size_t row = 0;
  std::vector < std::vector<char>> buff;
  buff.resize(n);
  for (size_t i = 0; i < str.size(); ++i) {
      if (row == 0 || row == n - 1) {
          dir_down = !dir_down;
      }
      buff[row].push_back(str[i]);
      dir_down ? ++row : --row;
  }
  for (std::vector<char>& rail : buff) {
      for (char letter : rail) {
          answ += letter;
      }
  }
  return answ;
}

std::string decode_rail_fence_cipher(const std::string &str, int n) {
  if (!str.empty()) {
    int j = 0;
    bool flag = false;
    std::vector<std::vector<char>> a(n, std::vector<char>(str.size(), ' '));

    for (int i = 0; i < str.size(); ++i) {
        a[j][i] = '0';
        if (j == n - 1) {
            flag = 1;
        }
        else if (j == 0)
            flag = false;
        if (!flag) {
            j++;
        }
        else j--;
    }
    int temp = 0;
    for (int i = 0; i < n; ++i) {
        for (j = 0; j < str.size(); ++j) {
            if (a[i][j] == '0')
                a[i][j] = str[temp++];
        }
    }
    flag = false;
    j = 0;
    std::string answ = "";
    for (int i = 0; i < str.size(); ++i) {
        answ += a[j][i];
        if (j == n - 1) {
            flag = true;
        }
        else if (j == 0)
            flag = false;
        if (!flag) {
            ++j;
        }
        else --j;
    }
    return answ;
  }
  return "";
}